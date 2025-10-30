<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}

require_once __DIR__ . '/config.php';

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid_json']);
  exit;
}

$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$name = isset($data['name']) ? trim($data['name']) : '';

if ($email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'email y message son requeridos']);
  exit;
}

$to = defined('MAIL_TO') ? MAIL_TO : '';
$from = defined('MAIL_FROM') ? MAIL_FROM : '';
if ($to === '' || $from === '') {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'server_not_configured', 'detail' => 'MAIL_TO/MAIL_FROM missing']);
  exit;
}

$subject = 'Nuevo mensaje desde el sitio web';
$body = "Nombre: " . ($name !== '' ? $name : '-') . "\nCorreo: " . $email . "\n\nMensaje:\n" . $message;

$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = @mail($to, $subject, $body, $headers);

if ($ok) {
  echo json_encode(['ok' => true, 'provider' => 'php_mail']);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'send_failed', 'provider' => 'php_mail']);
}

?>
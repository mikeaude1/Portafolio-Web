<?php
// Simple endpoint de contacto: recibe JSON { email, message, name? } y envía correo via mail()
// Ajusta $TO y $FROM_DOMAIN a tus valores reales.
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  echo '';
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([ 'ok' => false, 'error' => 'method_not_allowed' ]);
  exit;
}

function readJson() {
  $raw = file_get_contents('php://input');
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}
function sanitizeEmail($e) {
  $e = trim($e ?? '');
  $e = str_replace(["\r","\n"], '', $e); // evitar header injection
  return $e;
}
function safeText($t) {
  $t = trim($t ?? '');
  return $t;
}

$payload = readJson();
$email = sanitizeEmail($payload['email'] ?? '');
$message = safeText($payload['message'] ?? '');
$name = safeText($payload['name'] ?? '');

if (!$email || !$message) {
  http_response_code(400);
  echo json_encode([ 'ok' => false, 'error' => 'bad_request', 'message' => 'email y message son requeridos' ]);
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([ 'ok' => false, 'error' => 'invalid_email' ]);
  exit;
}

// Configuración básica: ajusta a tu dominio y destino
$TO = 'miguelaude@ymail.com'; // Cambia al correo donde quieres recibir
$FROM_DOMAIN = 'audedev.com'; // Cambia a tu dominio
$FROM_ADDR = 'noreply@' . $FROM_DOMAIN; // Debe ser del mismo dominio del hosting

$subject = 'Nuevo mensaje desde el sitio web';
$body = "Nombre: " . ($name ? $name : '-') . "\n" .
        "Correo: " . $email . "\n\n" .
        "Mensaje:\n" . $message . "\n";

$headers = [];
$headers[] = 'From: ' . $FROM_ADDR;
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$headersStr = implode("\r\n", $headers);

$ok = @mail($TO, $subject, $body, $headersStr);

if ($ok) {
  echo json_encode([ 'ok' => true, 'provider' => 'php_mail' ]);
} else {
  http_response_code(500);
  echo json_encode([ 'ok' => false, 'error' => 'send_failed' ]);
}
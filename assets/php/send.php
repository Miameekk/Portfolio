<?php
date_default_timezone_set('Europe/Warsaw'); // ustaw strefę czasową

// Sprawdź czy formularz został wysłany metodą POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Zła metoda');
}

// Pobierz dane z formularza
$name = htmlspecialchars($_POST['name'] ?? 'Brak imienia');
$email = htmlspecialchars($_POST['email'] ?? 'Brak emaila');
$message = htmlspecialchars($_POST['message'] ?? 'Brak wiadomości');

// Jeśli dane są puste, przerwij
if (empty($name) || empty($email) || empty($message)) {
    exit('Brakuje danych!');
}

// Oblicz czas wysłania dla footer
$sentTime = time();
$footer = formatFooterTime($sentTime);

// Twój webhook Discord
$webhook = 'https://discord.com/api/webhooks/1424837330019156039/FVZ1eoEfuHCjIQdyxeKjSD26fUu2glDMrnzDGTs3vjKg_W0ZENvJyrd3hITLyPv2UnkU';

// Przygotuj embed
$description = "Email: `{$email}`\nMessage: `{$message}`";

$payload = json_encode([
    'embeds' => [[
        'title' => $name,
        'description' => $description,
        'color' => hexdec('00FF00'),
        'footer' => ['text' => $footer],
        'timestamp' => date('c', $sentTime)
    ]]
]);

// Wyślij do Discorda
$ch = curl_init($webhook);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);
curl_close($ch);

// Przekierowanie na stronę z podziękowaniem
header('Location: ../pages/thanks.html');
exit;

// Funkcja do stopki z czasem
function formatFooterTime($timestamp) {
    $diff = time() - $timestamp;
    if ($diff < 60) return "Wysłano teraz";
    if ($diff < 3600) return "Wysłano " . floor($diff / 60) . " minut temu";
    if ($diff < 86400) return "Wysłano " . floor($diff / 3600) . " godzin temu";
    return "Wysłano " . date('Y-m-d H:i', $timestamp);
}
?>

/* ==========================================
   İSTANBUL BOŞ PARK
   ANA JAVASCRIPT
========================================== */


/* ==========================================
   KULLANIM KILAVUZU
========================================== */

const GUIDE_STORAGE_KEY = "istanbulBosParkGuideAccepted";

function createUsageGuide() {

    if (
        localStorage.getItem(GUIDE_STORAGE_KEY) === "true"
    ) {
        return;
    }

    const overlay = document.createElement("div");

    overlay.id = "usageGuideOverlay";

    Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        zIndex: "999999",
        background: "#07090d",
        color: "#fff",
        overflowY: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        boxSizing: "border-box",
        fontFamily: "Arial, Helvetica, sans-serif"
    });

    const card = document.createElement("div");

    Object.assign(card.style, {
        width: "min(760px, 100%)",
        maxHeight: "90vh",
        overflowY: "auto",
        background: "linear-gradient(145deg, #111827, #0b1019)",
        border: "1px solid rgba(255,255,255,.10)",
        borderRadius: "24px",
        padding: "38px",
        boxSizing: "border-box",
        boxShadow: "0 30px 100px rgba(0,0,0,.65)"
    });

    const logo = document.createElement("div");

    logo.textContent = "P";

    Object.assign(logo.style, {
        width: "58px",
        height: "58px",
        borderRadius: "17px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#ef3340,#c91f2b)",
        fontSize: "26px",
        fontWeight: "900",
        marginBottom: "20px",
        boxShadow: "0 10px 30px rgba(239,51,64,.25)"
    });

    card.appendChild(logo);

    const title = document.createElement("h1");

    title.textContent = "İstanbul Boş Park";

    Object.assign(title.style, {
        margin: "0",
        fontSize: "clamp(28px,5vw,42px)",
        lineHeight: "1.1",
        fontWeight: "800"
    });

    card.appendChild(title);

    const subtitle = document.createElement("p");

    subtitle.textContent =
        "Siteyi kullanmadan önce lütfen kullanım kılavuzunu okuyun.";

    Object.assign(subtitle.style, {
        margin: "10px 0 30px",
        color: "#98a2b3",
        fontSize: "15px",
        lineHeight: "1.6"
    });

    card.appendChild(subtitle);

    const guideItems = [
        {
            icon: "📍",
            title: "Konumunu Bul",
            text:
                "Konum izni vererek bulunduğun yere yakın, 500 metre içerisindeki park yerlerini görüntüleyebilirsin."
        },
        {
            icon: "🅿️",
            title: "Park Yeri Ekle",
            text:
                "Konumunu bulduktan sonra haritada 500 metre içerisindeki uygun bir noktaya tıklayarak park yerinin Boş veya Dolu olduğunu bildirebilirsin."
        },
        {
            icon: "🔄",
            title: "Park Durumunu Güncelle",
            text:
                "Haritadaki mevcut park yerlerinin durumunu güncelleyebilirsin. Böylece diğer kullanıcılar daha güncel bilgi görebilir."
        },
        {
            icon: "⏱️",
            title: "Kullanım Limiti",
            text:
                "Park yeri ekleme işlemini 2 kez, mevcut park yeri güncelleme işlemini 2 kez yapabilirsin. Limit dolduğunda 2 saatlik bekleme süresi başlar."
        },
        {
            icon: "📸",
            title: "Park Paylaş",
            text:
                "Park Paylaş bölümünden İstanbul'daki park deneyimini fotoğraf ve açıklama ile diğer kullanıcılarla paylaşabilirsin."
        },
        {
            icon: "✉️",
            title: "İletişim",
            text:
                "Görüş, öneri veya hata bildirimlerini İletişim bölümünden bize gönderebilirsin."
        }
    ];

    guideItems.forEach(item => {

        const row = document.createElement("div");

        Object.assign(row.style, {
            display: "flex",
            gap: "16px",
            padding: "18px 0",
            borderBottom: "1px solid rgba(255,255,255,.07)"
        });

        const icon = document.createElement("div");

        icon.textContent = item.icon;

        Object.assign(icon.style, {
            flexShrink: "0",
            width: "44px",
            height: "44px",
            borderRadius: "13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(239,51,64,.10)",
            fontSize: "20px"
        });

        const content = document.createElement("div");

        const itemTitle = document.createElement("strong");

        itemTitle.textContent = item.title;

        Object.assign(itemTitle.style, {
            display: "block",
            color: "#fff",
            fontSize: "15px",
            marginBottom: "5px"
        });

        const itemText = document.createElement("p");

        itemText.textContent = item.text;

        Object.assign(itemText.style, {
            margin: "0",
            color: "#98a2b3",
            fontSize: "13px",
            lineHeight: "1.6"
        });

        content.appendChild(itemTitle);
        content.appendChild(itemText);

        row.appendChild(icon);
        row.appendChild(content);

        card.appendChild(row);
    });

    const warning = document.createElement("div");

    warning.textContent =
        "Park bilgileri kullanıcı bildirimlerine dayanır. Gösterilen bilgilerin kesin veya anlık olarak doğru olduğu garanti edilmez.";

    Object.assign(warning.style, {
        marginTop: "25px",
        padding: "15px",
        borderRadius: "13px",
        background: "rgba(239,51,64,.08)",
        border: "1px solid rgba(239,51,64,.18)",
        color: "#d8dce3",
        fontSize: "12px",
        lineHeight: "1.6"
    });

    card.appendChild(warning);

    const agreement = document.createElement("label");

    Object.assign(agreement.style, {
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginTop: "25px",
        cursor: "pointer",
        color: "#d8dce3",
        fontSize: "13px",
        lineHeight: "1.5"
    });

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = "guideAgreement";

    Object.assign(checkbox.style, {
        width: "18px",
        height: "18px",
        marginTop: "1px",
        accentColor: "#ef3340",
        flexShrink: "0"
    });

    const agreementText = document.createElement("span");

    agreementText.textContent =
        "Kullanım kılavuzunu okudum, anladım ve site kullanım koşullarını kabul ediyorum.";

    agreement.appendChild(checkbox);
    agreement.appendChild(agreementText);

    card.appendChild(agreement);

    const buttons = document.createElement("div");

    Object.assign(buttons.style, {
        display: "flex",
        gap: "12px",
        marginTop: "25px"
    });

    const rejectButton = document.createElement("button");

    rejectButton.type = "button";
    rejectButton.textContent = "Reddet";

    Object.assign(rejectButton.style, {
        flex: "1",
        minHeight: "48px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,.12)",
        background: "rgba(255,255,255,.04)",
        color: "#98a2b3",
        fontWeight: "700",
        cursor: "pointer"
    });

    const acceptButton = document.createElement("button");

    acceptButton.type = "button";
    acceptButton.textContent = "Anladım, Onaylıyorum";

    Object.assign(acceptButton.style, {
        flex: "2",
        minHeight: "48px",
        border: "0",
        borderRadius: "12px",
        background: "linear-gradient(135deg,#ef3340,#d92532)",
        color: "#fff",
        fontWeight: "800",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(239,51,64,.20)"
    });

    acceptButton.addEventListener("click", function () {

        if (!checkbox.checked) {

            alert(
                "Devam etmek için kullanım kılavuzunu okuduğunu ve kabul ettiğini onaylamalısın."
            );

            return;
        }

        localStorage.setItem(
            GUIDE_STORAGE_KEY,
            "true"
        );

        overlay.remove();
    });

    rejectButton.addEventListener("click", function () {

        overlay.innerHTML = "";

        Object.assign(overlay.style, {
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        });

        const rejected = document.createElement("div");

        const rejectedTitle = document.createElement("div");

        rejectedTitle.textContent = "İstanbul Boş Park";

        Object.assign(rejectedTitle.style, {
            color: "#fff",
            fontSize: "22px",
            fontWeight: "800",
            marginBottom: "10px"
        });

        const rejectedText = document.createElement("div");

        rejectedText.textContent =
            "Kullanım koşullarını kabul etmeden siteyi kullanamazsın.";

        Object.assign(rejectedText.style, {
            color: "#666",
            fontSize: "13px"
        });

        rejected.appendChild(rejectedTitle);
        rejected.appendChild(rejectedText);

        overlay.appendChild(rejected);
    });

    buttons.appendChild(rejectButton);
    buttons.appendChild(acceptButton);

    card.appendChild(buttons);

    overlay.appendChild(card);

    document.body.appendChild(overlay);
}

createUsageGuide();


/* ==========================================
   HARİTA
========================================== */

const map = L.map("map").setView(
    [41.0082, 28.9784],
    13
);

L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
    }
).addTo(map);


/* ==========================================
   DEĞİŞKENLER
========================================== */

let parkingSpots = [];
let parkingMarkers = [];

let userMarker = null;
let temporaryMarker = null;

let selectedLocation = null;
let selectedSpot = null;

let currentUserLocation = null;


/* ==========================================
   İŞLEM LİMİT SİSTEMİ
========================================== */

const LIMIT_STORAGE_KEY = "istanbulBosParkUsage";

const MAX_ACTIONS = 2;

const COOLDOWN_TIME = 2 * 60 * 60 * 1000;


function getUsageData() {

    try {

        const saved = localStorage.getItem(
            LIMIT_STORAGE_KEY
        );

        if (!saved) {

            return {
                addCount: 0,
                updateCount: 0,
                cooldownStartedAt: null
            };
        }

        const data = JSON.parse(saved);

        if (
            !data ||
            typeof data !== "object"
        ) {
            throw new Error(
                "Geçersiz kullanım verisi"
            );
        }

        if (
            data.cooldownStartedAt &&
            Date.now() - data.cooldownStartedAt >= COOLDOWN_TIME
        ) {

            const resetData = {
                addCount: 0,
                updateCount: 0,
                cooldownStartedAt: null
            };

            saveUsageData(resetData);

            return resetData;
        }

        return {
            addCount: Number(data.addCount) || 0,
            updateCount: Number(data.updateCount) || 0,
            cooldownStartedAt:
                data.cooldownStartedAt || null
        };

    } catch (error) {

        console.error(
            "Kullanım verisi okunamadı:",
            error
        );

        return {
            addCount: 0,
            updateCount: 0,
            cooldownStartedAt: null
        };
    }
}


function saveUsageData(data) {

    try {

        localStorage.setItem(
            LIMIT_STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.error(
            "Kullanım verisi kaydedilemedi:",
            error
        );
    }
}


function resetUsageIfNeeded() {

    const data = getUsageData();

    if (
        data.cooldownStartedAt &&
        Date.now() - data.cooldownStartedAt >= COOLDOWN_TIME
    ) {

        const resetData = {
            addCount: 0,
            updateCount: 0,
            cooldownStartedAt: null
        };

        saveUsageData(resetData);

        return resetData;
    }

    return data;
}


function startCooldownIfNeeded(data) {

    if (
        data.addCount >= MAX_ACTIONS ||
        data.updateCount >= MAX_ACTIONS
    ) {

        if (!data.cooldownStartedAt) {

            data.cooldownStartedAt = Date.now();

            saveUsageData(data);
        }
    }
}


function registerAction(type) {

    const data = resetUsageIfNeeded();

    if (type === "add") {
        data.addCount++;
    }

    if (type === "update") {
        data.updateCount++;
    }

    startCooldownIfNeeded(data);

    saveUsageData(data);
}


function getRemainingActions(type) {

    const data = resetUsageIfNeeded();

    if (type === "add") {

        return Math.max(
            0,
            MAX_ACTIONS - data.addCount
        );
    }

    if (type === "update") {

        return Math.max(
            0,
            MAX_ACTIONS - data.updateCount
        );
    }

    return 0;
}


function getCooldownRemaining() {

    const data = resetUsageIfNeeded();

    if (!data.cooldownStartedAt) {
        return 0;
    }

    const remaining =
        COOLDOWN_TIME -
        (Date.now() - data.cooldownStartedAt);

    return Math.max(
        0,
        remaining
    );
}


function formatRemainingTime(milliseconds) {

    if (milliseconds <= 0) {
        return "Hazır";
    }

    const totalMinutes = Math.ceil(
        milliseconds / (1000 * 60)
    );

    const hours = Math.floor(
        totalMinutes / 60
    );

    const minutes = totalMinutes % 60;

    if (hours > 0) {

        return (
            hours +
            " saat " +
            minutes +
            " dakika"
        );
    }

    return minutes + " dakika";
}


function showLimitMessage(type) {

    const remaining = getRemainingActions(type);

    if (remaining > 0) {
        return false;
    }

    const cooldown = getCooldownRemaining();

    if (cooldown > 0) {

        alert(
            "Bu işlem için kullanım limitine ulaştın.\n\n" +
            "Tekrar işlem yapabilmen için:\n" +
            formatRemainingTime(cooldown) +
            " beklemelisin."
        );

    } else {

        alert(
            "Bu işlem için kullanım limitine ulaştın."
        );
    }

    return true;
}


/* ==========================================
   PARK LOCAL STORAGE
========================================== */

const PARKING_STORAGE_KEY = "istanbulBosPark";


function loadParkingSpots() {

    try {

        const saved = localStorage.getItem(
            PARKING_STORAGE_KEY
        );

        if (!saved) {

            parkingSpots = [];

            return;
        }

        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {

            parkingSpots = parsed;

        } else {

            parkingSpots = [];
        }

    } catch (error) {

        console.error(
            "Park verileri okunamadı:",
            error
        );

        parkingSpots = [];
    }
}


function saveParkingSpots() {

    try {

        localStorage.setItem(
            PARKING_STORAGE_KEY,
            JSON.stringify(parkingSpots)
        );

    } catch (error) {

        console.error(
            "Park verileri kaydedilemedi:",
            error
        );
    }
}


function generateSpotId() {

    if (
        window.crypto &&
        typeof window.crypto.randomUUID === "function"
    ) {
        return window.crypto.randomUUID();
    }

    return (
        "spot_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(16)
            .slice(2)
    );
}


function ensureParkingSpotIds() {

    let changed = false;

    parkingSpots.forEach(spot => {

        if (!spot.id) {

            spot.id = generateSpotId();

            changed = true;
        }
    });

    if (changed) {
        saveParkingSpots();
    }
}


loadParkingSpots();
ensureParkingSpotIds();


/* ==========================================
   MESAFE
========================================== */

function calculateDistance(
    lat1,
    lng1,
    lat2,
    lng2
) {

    const R = 6371000;

    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const dLng =
        (lng2 - lng1) *
        Math.PI / 180;

    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +

        Math.cos(
            lat1 * Math.PI / 180
        ) *

        Math.cos(
            lat2 * Math.PI / 180
        ) *

        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


/* ==========================================
   TARİH
========================================== */

function getCurrentTime() {

    return new Date().toLocaleString(
        "tr-TR",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    );
}


/* ==========================================
   DOĞRULUK
========================================== */

function getParkingAccuracy(spot) {

    if (!spot) {
        return 100;
    }

    if (!spot.updatedAtTimestamp) {
        return 100;
    }

    const updatedAt = new Date(
        spot.updatedAtTimestamp
    );

    const now = new Date();

    if (
        Number.isNaN(
            updatedAt.getTime()
        )
    ) {
        return 100;
    }

    if (updatedAt >= now) {
        return 100;
    }

    let current = new Date(updatedAt);

    let activeHours = 0;

    while (current < now) {

        const currentHour =
            current.getHours();

        const nextHour =
            new Date(current);

        nextHour.setHours(
            current.getHours() + 1,
            0,
            0,
            0
        );

        const periodEnd =
            nextHour < now
                ? nextHour
                : now;

        if (
            currentHour >= 6 &&
            currentHour < 23
        ) {

            const milliseconds =
                periodEnd - current;

            activeHours +=
                milliseconds /
                (1000 * 60 * 60);
        }

        current = nextHour;
    }

    let accuracy =
        100 -
        (activeHours * 2);

    if (accuracy < 0) {
        accuracy = 0;
    }

    return Math.round(accuracy);
}


function getAccuracyInfo(accuracy) {

    if (accuracy >= 80) {

        return {
            className: "accuracy-high",
            label: "Yüksek doğruluk"
        };
    }

    if (accuracy >= 50) {

        return {
            className: "accuracy-medium",
            label: "Orta doğruluk"
        };
    }

    return {
        className: "accuracy-low",
        label: "Düşük doğruluk"
    };
}


/* ==========================================
   İSTATİSTİKLER
========================================== */

function updateParkingStatistics(
    userLat = null,
    userLng = null
) {

    const emptyElement =
        document.getElementById(
            "emptyParkingCount"
        );

    const fullElement =
        document.getElementById(
            "fullParkingCount"
        );

    const totalElement =
        document.getElementById(
            "totalParkingCount"
        );

    if (
        !emptyElement ||
        !fullElement ||
        !totalElement
    ) {
        return;
    }

    let emptyCount = 0;
    let fullCount = 0;

    parkingSpots.forEach(spot => {

        if (
            userLat !== null &&
            userLng !== null
        ) {

            const distance =
                calculateDistance(
                    userLat,
                    userLng,
                    Number(spot.lat),
                    Number(spot.lng)
                );

            if (distance > 500) {
                return;
            }
        }

        if (spot.status === "empty") {
            emptyCount++;
        }

        if (spot.status === "full") {
            fullCount++;
        }
    });

    emptyElement.textContent =
        emptyCount;

    fullElement.textContent =
        fullCount;

    totalElement.textContent =
        emptyCount +
        fullCount;
}


/* ==========================================
   FAVORİLER
========================================== */

const FAVORITES_STORAGE_KEY =
    "istanbulBosParkFavorites";


function getFavoriteIds() {

    try {

        const saved =
            localStorage.getItem(
                FAVORITES_STORAGE_KEY
            );

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Favoriler okunamadı:",
            error
        );

        return [];
    }
}


function saveFavoriteIds(favorites) {

    try {

        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(favorites)
        );

    } catch (error) {

        console.error(
            "Favoriler kaydedilemedi:",
            error
        );
    }
}


function getSpotId(spot) {

    if (!spot.id) {

        spot.id = generateSpotId();

        saveParkingSpots();
    }

    return spot.id;
}


function isFavorite(spot) {

    const favorites =
        getFavoriteIds();

    const id =
        getSpotId(spot);

    return favorites.includes(id);
}


function toggleFavorite(spot) {

    const favorites =
        getFavoriteIds();

    const id =
        getSpotId(spot);

    const existingIndex =
        favorites.indexOf(id);

    if (existingIndex !== -1) {

        favorites.splice(
            existingIndex,
            1
        );

        saveFavoriteIds(favorites);

        return false;
    }

    favorites.push(id);

    saveFavoriteIds(favorites);

    return true;
}


/* ==========================================
   YANLIŞ RAPORLARI
========================================== */

const REPORTS_STORAGE_KEY =
    "istanbulBosParkReports";


function getReports() {

    try {

        const saved =
            localStorage.getItem(
                REPORTS_STORAGE_KEY
            );

        if (!saved) {
            return [];
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Raporlar okunamadı:",
            error
        );

        return [];
    }
}


function saveReports(reports) {

    try {

        localStorage.setItem(
            REPORTS_STORAGE_KEY,
            JSON.stringify(reports)
        );

    } catch (error) {

        console.error(
            "Rapor kaydedilemedi:",
            error
        );
    }
}


function reportWrongSpot(spot) {

    const confirmed =
        confirm(
            "Bu park bilgisinin yanlış olduğunu bildirmek istiyor musun?"
        );

    if (!confirmed) {
        return;
    }

    const reports =
        getReports();

    const spotId =
        getSpotId(spot);

    const alreadyReported =
        reports.some(
            report =>
                report.spotId === spotId
        );

    if (alreadyReported) {

        alert(
            "Bu park yeri için daha önce bildirim gönderdin."
        );

        return;
    }

    reports.push({
        spotId: spotId,
        date: getCurrentTime(),
        type: "wrong_information"
    });

    saveReports(reports);

    alert(
        "Bildirimin alındı. Teşekkür ederiz."
    );
}


/* ==========================================
   MARKER TEMİZLE
========================================== */

function clearParkingMarkers() {

    parkingMarkers.forEach(marker => {

        map.removeLayer(marker);
    });

    parkingMarkers = [];
}


/* ==========================================
   PARK MARKER
========================================== */

function createParkingIcon(
    status,
    accuracy
) {

    let color = "#16a34a";

    if (status === "full") {
        color = "#ef3340";
    }

    let opacity = 1;

    if (accuracy < 50) {
        opacity = 0.72;
    }

    return L.divIcon({

        className: "",

        html:
            '<div style="' +
            "width:18px;" +
            "height:18px;" +
            "border-radius:50%;" +
            "background:" + color + ";" +
            "border:3px solid white;" +
            "box-shadow:0 2px 8px rgba(0,0,0,.35);" +
            "opacity:" + opacity + ';">' +
            "</div>",

        iconSize: [18, 18],

        iconAnchor: [9, 9]
    });
}


/* ==========================================
   SON GÜNCELLENENLER
========================================== */

function updateRecentParking(
    userLat,
    userLng
) {

    const container =
        document.getElementById(
            "recentParkingList"
        );

    if (!container) {
        return;
    }

    const nearbySpots =
        parkingSpots
            .map(
                (spot, index) => {

                    const distance =
                        calculateDistance(
                            userLat,
                            userLng,
                            Number(spot.lat),
                            Number(spot.lng)
                        );

                    return {
                        spot: spot,
                        index: index,
                        distance: distance
                    };
                }
            )
            .filter(
                item =>
                    item.distance <= 500
            )
            .sort(
                (a, b) => {

                    const dateA =
                        new Date(
                            a.spot.updatedAtTimestamp || 0
                        );

                    const dateB =
                        new Date(
                            b.spot.updatedAtTimestamp || 0
                        );

                    return dateB - dateA;
                }
            )
            .slice(0, 5);

    if (
        nearbySpots.length === 0
    ) {

        container.innerHTML =
            '<div class="recent-empty">' +
            "Yakınında henüz park bildirimi yok." +
            "</div>";

        return;
    }

    container.innerHTML = "";

    nearbySpots.forEach(item => {

        const spot = item.spot;

        const row =
            document.createElement("div");

        row.className =
            "recent-parking-item";

        const dot =
            document.createElement("span");

        dot.className =
            "recent-dot " +
            (
                spot.status === "empty"
                    ? "empty"
                    : "full"
            );

        const content =
            document.createElement("div");

        content.className =
            "recent-content";

        const title =
            document.createElement("strong");

        title.textContent =
            spot.status === "empty"
                ? "Boş park bildirimi"
                : "Dolu park bildirimi";

        const meta =
            document.createElement("span");

        meta.textContent =
            Math.round(item.distance) +
            " metre • " +
            (
                spot.updatedAt ||
                "Bilinmiyor"
            );

        content.appendChild(title);
        content.appendChild(meta);

        row.appendChild(dot);
        row.appendChild(content);

        container.appendChild(row);
    });
}


/* ==========================================
   YAKIN PARKLAR
========================================== */

function showNearbyParking(
    userLat,
    userLng
) {

    clearParkingMarkers();

    parkingSpots.forEach(
        (spot, index) => {

            const distance =
                calculateDistance(
                    userLat,
                    userLng,
                    Number(spot.lat),
                    Number(spot.lng)
                );

            if (distance > 500) {
                return;
            }

            const accuracy =
                getParkingAccuracy(spot);

            const accuracyInfo =
                getAccuracyInfo(accuracy);

            const statusText =
                spot.status === "empty"
                    ? "Boş"
                    : "Dolu";

            const marker =
                L.marker(
                    [
                        Number(spot.lat),
                        Number(spot.lng)
                    ],
                    {
                        icon:
                            createParkingIcon(
                                spot.status,
                                accuracy
                            )
                    }
                ).addTo(map);

            const popup =
                document.createElement("div");

            popup.className =
                "parking-popup";

            const title =
                document.createElement("h3");

            title.textContent =
                "Park Yeri";

            popup.appendChild(title);

            const status =
                document.createElement("div");

            status.className =
                "popup-status " +
                (
                    spot.status === "empty"
                        ? "empty"
                        : "full"
                );

            status.textContent =
                statusText;

            popup.appendChild(status);

            const info =
                document.createElement("div");

            info.className =
                "popup-info";

            info.innerHTML =
                "<div>" +
                "Mesafe: " +
                "<strong>" +
                Math.round(distance) +
                " metre" +
                "</strong>" +
                "</div>" +

                "<div>" +
                "Koordinat: " +
                Number(spot.lat).toFixed(5) +
                ", " +
                Number(spot.lng).toFixed(5) +
                "</div>" +

                "<div>" +
                "Son güncelleme: " +
                (
                    spot.updatedAt ||
                    "Bilinmiyor"
                ) +
                "</div>";

            popup.appendChild(info);


            /* DOĞRULUK */

            const accuracyBox =
                document.createElement("div");

            accuracyBox.className =
                "accuracy-box " +
                accuracyInfo.className;

            const accuracyTop =
                document.createElement("div");

            accuracyTop.className =
                "accuracy-top";

            const accuracyTitle =
                document.createElement("span");

            accuracyTitle.className =
                "accuracy-title";

            accuracyTitle.textContent =
                "Park yeri doğruluğu";

            const accuracyValue =
                document.createElement("span");

            accuracyValue.className =
                "accuracy-value";

            accuracyValue.textContent =
                "%" + accuracy;

            accuracyTop.appendChild(
                accuracyTitle
            );

            accuracyTop.appendChild(
                accuracyValue
            );

            accuracyBox.appendChild(
                accuracyTop
            );

            const accuracyLabel =
                document.createElement("div");

            accuracyLabel.className =
                "accuracy-label";

            accuracyLabel.textContent =
                accuracyInfo.label;

            accuracyBox.appendChild(
                accuracyLabel
            );

            const accuracyBar =
                document.createElement("div");

            accuracyBar.className =
                "accuracy-bar";

            const accuracyFill =
                document.createElement("div");

            accuracyFill.className =
                "accuracy-bar-fill";

            accuracyFill.style.width =
                accuracy + "%";

            accuracyBar.appendChild(
                accuracyFill
            );

            accuracyBox.appendChild(
                accuracyBar
            );

            popup.appendChild(
                accuracyBox
            );


            /* YOL TARİFİ */

            const directionButton =
                document.createElement("button");

            directionButton.type =
                "button";

            directionButton.className =
                "popup-direction-button";

            directionButton.textContent =
                "🧭 Yol Tarifi";

            directionButton.addEventListener(
                "click",
                function () {

                    const destination =
                        Number(spot.lat) +
                        "," +
                        Number(spot.lng);

                    const googleMapsUrl =
                        "https://www.google.com/maps/dir/?api=1" +
                        "&destination=" +
                        encodeURIComponent(destination) +
                        "&travelmode=driving";

                    window.open(
                        googleMapsUrl,
                        "_blank"
                    );
                }
            );

            popup.appendChild(
                directionButton
            );


            /* FAVORİ */

            const favoriteButton =
                document.createElement("button");

            favoriteButton.type =
                "button";

            favoriteButton.className =
                "popup-favorite-button";

            function updateFavoriteButton() {

                const favorite =
                    isFavorite(spot);

                favoriteButton.textContent =
                    favorite
                        ? "★ Favorilerden Çıkar"
                        : "☆ Favorilere Ekle";
            }

            updateFavoriteButton();

            favoriteButton.addEventListener(
                "click",
                function () {

                    toggleFavorite(spot);

                    updateFavoriteButton();
                }
            );

            popup.appendChild(
                favoriteButton
            );


            /* GÜNCELLE */

            const updateButton =
                document.createElement("button");

            updateButton.type =
                "button";

            updateButton.className =
                "popup-update-button";

            const updateRemaining =
                getRemainingActions("update");

            updateButton.textContent =
                updateRemaining > 0
                    ? "Park Durumunu Güncelle"
                    : "Güncelleme Limiti Doldu";

            updateButton.addEventListener(
                "click",
                function () {

                    if (
                        showLimitMessage("update")
                    ) {
                        return;
                    }

                    /*
                       ÖNEMLİ:
                       Burada closeParkingMenu()
                       çağırmıyoruz.
                       Çünkü o fonksiyon selectedSpot'u
                       sıfırlıyordu.
                    */

                    selectedSpot = index;

                    selectedLocation = {
                        lat: Number(spot.lat),
                        lng: Number(spot.lng)
                    };

                    openParkingMenu(
                        Number(spot.lat),
                        Number(spot.lng)
                    );
                }
            );

            popup.appendChild(
                updateButton
            );


            /* YANLIŞ BİLDİR */

            const reportButton =
                document.createElement("button");

            reportButton.type =
                "button";

            reportButton.className =
                "popup-report-button";

            reportButton.textContent =
                "⚠️ Yanlış Bildirimi Raporla";

            reportButton.addEventListener(
                "click",
                function () {

                    reportWrongSpot(spot);
                }
            );

            popup.appendChild(
                reportButton
            );

            marker.bindPopup(popup);

            parkingMarkers.push(marker);
        }
    );

    updateParkingStatistics(
        userLat,
        userLng
    );

    updateRecentParking(
        userLat,
        userLng
    );
}


/* ==========================================
   KULLANICI KONUMU
========================================== */

function findUserLocation() {

    if (!navigator.geolocation) {

        alert(
            "Tarayıcın konum özelliğini desteklemiyor."
        );

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;

            currentUserLocation = {
                lat: lat,
                lng: lng
            };

            map.setView(
                [
                    lat,
                    lng
                ],
                16
            );

            if (userMarker) {

                map.removeLayer(
                    userMarker
                );
            }

            userMarker =
                L.marker(
                    [
                        lat,
                        lng
                    ]
                ).addTo(map);

            userMarker.bindPopup(
                "Konumun burası."
            );

            showNearbyParking(
                lat,
                lng
            );
        },

        function (error) {

            console.error(
                "Konum hatası:",
                error
            );

            alert(
                "Konumuna erişilemedi. Lütfen tarayıcıdan konum izni ver."
            );
        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

window.findUserLocation =
    findUserLocation;

const findLocationButton =
    document.getElementById(
        "findLocationButton"
    );

if (findLocationButton) {

    findLocationButton.addEventListener(
        "click",
        findUserLocation
    );
}


/* ==========================================
   PARK MENÜSÜ
========================================== */

const parkingMenu =
    document.getElementById(
        "parkingMenu"
    );

const emptyButton =
    document.getElementById(
        "emptyButton"
    );

const fullButton =
    document.getElementById(
        "fullButton"
    );

const cancelButton =
    document.getElementById(
        "cancelButton"
    );


function openParkingMenu(
    lat,
    lng
) {

    selectedLocation = {
        lat: Number(lat),
        lng: Number(lng)
    };

    if (temporaryMarker) {

        map.removeLayer(
            temporaryMarker
        );
    }

    temporaryMarker =
        L.circleMarker(
            [
                Number(lat),
                Number(lng)
            ],
            {
                radius: 9,
                color: "#168cff",
                weight: 4,
                fillColor: "#168cff",
                fillOpacity: 0.35
            }
        ).addTo(map);

    if (parkingMenu) {

        parkingMenu.classList.add(
            "show"
        );
    }
}


function closeParkingMenu() {

    if (parkingMenu) {

        parkingMenu.classList.remove(
            "show"
        );
    }

    if (temporaryMarker) {

        map.removeLayer(
            temporaryMarker
        );

        temporaryMarker = null;
    }

    selectedLocation = null;
    selectedSpot = null;
}


if (cancelButton) {

    cancelButton.addEventListener(
        "click",
        closeParkingMenu
    );
}


/* ==========================================
   HARİTA TIKLAMA
========================================== */

map.on(
    "click",
    function (event) {

        const userPosition =
            userMarker
                ? userMarker.getLatLng()
                : null;

        if (!userPosition) {

            alert(
                "Önce 'Konumumu Bul' butonuna basmalısın."
            );

            return;
        }

        const clickedLat =
            event.latlng.lat;

        const clickedLng =
            event.latlng.lng;

        const distance =
            calculateDistance(
                userPosition.lat,
                userPosition.lng,
                clickedLat,
                clickedLng
            );

        if (distance > 500) {

            alert(
                "Sadece konumunun 500 metre çevresindeki park yerlerini ekleyebilirsin."
            );

            return;
        }

        if (
            showLimitMessage("add")
        ) {
            return;
        }

        /*
           Yeni park ekleme olduğu için
           selectedSpot kesinlikle null olmalı.
        */

        selectedSpot = null;

        openParkingMenu(
            clickedLat,
            clickedLng
        );
    }
);


/* ==========================================
   PARK DURUMU KAYDET
========================================== */

function saveParkingStatus(status) {

    if (!selectedLocation) {
        return;
    }


    /* GÜNCELLEME */

    if (
        selectedSpot !== null &&
        parkingSpots[selectedSpot]
    ) {

        if (
            showLimitMessage("update")
        ) {
            return;
        }

        const now = new Date();

        parkingSpots[
            selectedSpot
        ].status = status;

        parkingSpots[
            selectedSpot
        ].updatedAt =
            getCurrentTime();

        parkingSpots[
            selectedSpot
        ].updatedAtTimestamp =
            now.toISOString();

        parkingSpots[
            selectedSpot
        ].accuracy = 100;

        registerAction(
            "update"
        );

    } else {

        /* YENİ EKLEME */

        if (
            showLimitMessage("add")
        ) {
            return;
        }

        const now = new Date();

        parkingSpots.push({

            id:
                generateSpotId(),

            lat:
                Number(selectedLocation.lat),

            lng:
                Number(selectedLocation.lng),

            status:
                status,

            updatedAt:
                getCurrentTime(),

            updatedAtTimestamp:
                now.toISOString(),

            accuracy:
                100
        });

        registerAction(
            "add"
        );
    }

    saveParkingSpots();

    closeParkingMenu();

    if (userMarker) {

        const position =
            userMarker.getLatLng();

        showNearbyParking(
            position.lat,
            position.lng
        );

    } else {

        updateParkingStatistics();
    }
}


if (emptyButton) {

    emptyButton.addEventListener(
        "click",
        function () {

            saveParkingStatus(
                "empty"
            );
        }
    );
}


if (fullButton) {

    fullButton.addEventListener(
        "click",
        function () {

            saveParkingStatus(
                "full"
            );
        }
    );
}


/* ==========================================
   NAVIGATION
========================================== */

const navButtons =
    document.querySelectorAll(
        ".nav-button"
    );

const pages =
    document.querySelectorAll(
        ".page"
    );

navButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                const pageId =
                    button.dataset.page;

                if (
                    button.classList.contains(
                        "active"
                    )
                ) {
                    return;
                }

                navButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );
                    }
                );

                button.classList.add(
                    "active"
                );

                pages.forEach(
                    page => {

                        page.classList.remove(
                            "active-page"
                        );
                    }
                );

                const targetPage =
                    document.getElementById(
                        pageId
                    );

                if (targetPage) {

                    void targetPage.offsetWidth;

                    targetPage.classList.add(
                        "active-page"
                    );
                }

                if (
                    pageId === "mapPage"
                ) {

                    setTimeout(
                        function () {

                            map.invalidateSize();

                        },
                        400
                    );
                }
            }
        );
    }
);


/* ==========================================
   FOTOĞRAF
========================================== */

const photoInput =
    document.getElementById(
        "photoInput"
    );

const photoPreview =
    document.getElementById(
        "photoPreview"
    );

const shareDescription =
    document.getElementById(
        "shareDescription"
    );

const shareButton =
    document.getElementById(
        "shareButton"
    );

const postsContainer =
    document.getElementById(
        "postsContainer"
    );

let selectedPhotoData = null;


if (photoInput) {

    photoInput.addEventListener(
        "change",
        function () {

            const file =
                photoInput.files[0];

            if (!file) {

                selectedPhotoData = null;

                if (photoPreview) {
                    photoPreview.innerHTML = "";
                }

                return;
            }

            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    "Lütfen bir fotoğraf seç."
                );

                photoInput.value = "";

                return;
            }

            const reader =
                new FileReader();

            reader.onload =
                function (event) {

                    selectedPhotoData =
                        event.target.result;

                    if (photoPreview) {

                        photoPreview.innerHTML =
                            "";

                        const image =
                            document.createElement(
                                "img"
                            );

                        image.src =
                            selectedPhotoData;

                        photoPreview.appendChild(
                            image
                        );
                    }
                };

            reader.readAsDataURL(
                file
            );
        }
    );
}


/* ==========================================
   PAYLAŞIMLAR
========================================== */

function loadPosts() {

    if (!postsContainer) {
        return;
    }

    let posts = [];

    try {

        const saved =
            localStorage.getItem(
                "istanbulBosParkPosts"
            );

        if (saved) {

            const parsed =
                JSON.parse(saved);

            if (
                Array.isArray(parsed)
            ) {
                posts = parsed;
            }
        }

    } catch (error) {

        console.error(
            "Paylaşımlar okunamadı:",
            error
        );
    }

    postsContainer.innerHTML = "";

    if (
        posts.length === 0
    ) {

        postsContainer.innerHTML =
    '<div style="' +
    "grid-column:1 / -1;" +
    "padding:25px;" +
    "border-radius:15px;" +
    "background:#101827;" +
    "border:1px solid rgba(255,255,255,.07);" +
    "color:#718096;" +
    "font-size:12px;>'" +
    "Henüz paylaşım bulunmuyor." +
    "</div>";

        return;
    }

    posts
        .slice()
        .reverse()
        .forEach(
            post => {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "post-card";

                if (post.image) {

                    const image =
                        document.createElement(
                            "img"
                        );

                    image.src =
                        post.image;

                    card.appendChild(
                        image
                    );
                }

                const content =
                    document.createElement(
                        "div"
                    );

                content.className =
                    "post-content";

                const text =
                    document.createElement(
                        "p"
                    );

                text.textContent =
                    post.description;

                const date =
                    document.createElement(
                        "span"
                    );

                date.className =
                    "post-date";

                date.textContent =
                    post.date;

                content.appendChild(text);
                content.appendChild(date);

                card.appendChild(content);

                postsContainer.appendChild(card);
            }
        );
}


if (shareButton) {

    shareButton.addEventListener(
        "click",
        function () {

            const description =
                shareDescription
                    ? shareDescription.value.trim()
                    : "";

            if (
                !description &&
                !selectedPhotoData
            ) {

                alert(
                    "Lütfen bir açıklama veya fotoğraf ekle."
                );

                return;
            }

            let posts = [];

            try {

                const saved =
                    localStorage.getItem(
                        "istanbulBosParkPosts"
                    );

                if (saved) {

                    const parsed =
                        JSON.parse(saved);

                    if (
                        Array.isArray(parsed)
                    ) {
                        posts = parsed;
                    }
                }

            } catch (error) {

                posts = [];
            }

            posts.push({

                description:
                    description ||
                    "Fotoğraf paylaşımı",

                image:
                    selectedPhotoData,

                date:
                    getCurrentTime()
            });

            try {

                localStorage.setItem(
                    "istanbulBosParkPosts",
                    JSON.stringify(posts)
                );

            } catch (error) {

                alert(
                    "Paylaşım kaydedilemedi. Fotoğraf boyutu çok büyük olabilir."
                );

                return;
            }

            if (shareDescription) {
                shareDescription.value = "";
            }

            if (photoInput) {
                photoInput.value = "";
            }

            selectedPhotoData = null;

            if (photoPreview) {
                photoPreview.innerHTML = "";
            }

            loadPosts();

            alert(
                "Paylaşım başarıyla eklendi."
            );
        }
    );
}


/* ==========================================
   GERİ BİLDİRİM
========================================== */

const feedbackButton =
    document.getElementById(
        "feedbackButton"
    );

if (feedbackButton) {

    feedbackButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "mailto:iletisim@istanbulbospark.com" +
                "?subject=İstanbul Boş Park Geri Bildirim";
        }
    );
}


/* ==========================================
   MANUEL TRAFİK
========================================== */

const trafficData = {

    level:
        "medium",

    status:
        "Orta",

    description:
        "İstanbul genelinde trafik yer yer yoğun seyrediyor.",

    updateTime:
        "14:00"
};


function updateTrafficDisplay() {

    const statusElement =
        document.getElementById(
            "trafficStatus"
        );

    const descriptionElement =
        document.getElementById(
            "trafficDescription"
        );

    const updateElement =
        document.getElementById(
            "trafficUpdate"
        );

    const dotElement =
        document.getElementById(
            "trafficStatusDot"
        );

    if (
        !statusElement ||
        !descriptionElement ||
        !updateElement ||
        !dotElement
    ) {
        return;
    }

    statusElement.textContent =
        trafficData.status;

    descriptionElement.textContent =
        trafficData.description;

    updateElement.textContent =
        trafficData.updateTime;

    dotElement.classList.remove(
        "low",
        "medium",
        "high"
    );

    dotElement.classList.add(
        trafficData.level
    );
}


/* ==========================================
   BAŞLANGIÇ
========================================== */

updateParkingStatistics();

loadPosts();

updateTrafficDisplay();
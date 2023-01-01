
$(function() {
  function recalc() {
    var total = 0,
      vr = 0,
      qr = 0,
      dm = 0,
      ar = 0,
      cnt = 0;

    var v = parseInt($("#vr").val().trim());
    if (v <= 5) vr = 300;
    else if (v <= 7) vr = 330;
    else if (v <= 8) vr = 350;
    else if (v <= 10) vr = 370;
    else if (v <= 11) vr = 400;
    else if (v <= 12) vr = 430;
    else if (v <= 14) vr = 450;
    else if (v <= 15) vr = 470;
    else if (v <= 17) vr = 500;
    else if (v <= 18) vr = 530;
    else if (v <= 20) vr = 550;
    else if (v <= 22) vr = 570;
    else if (v <= 23) vr = 600;
    else if (v <= 25) vr = 630;
    else if (v <= 27) vr = 650;
    else if (v <= 29) vr = 670;
    else if (v <= 31) vr = 700;
    else if (v <= 32) vr = 730;
    else if (v <= 33) vr = 750;
    else if (v <= 34) vr = 770;
    else if (v <= 36) vr = 800;
    else if (v <= 38) vr = 830;
    else if (v <= 39) vr = 850;
    else if (v <= 41) vr = 870;
    else if (v <= 44) vr = 900;

    if (!v || v < 0 || v > 44) vr = "?";
    else cnt += 1;
    $("#vr_t").text(vr);


    v = parseInt($("#dm").val().trim());
    if (v <= 3) dm = 300;
    else if (v <= 4) dm = 330;
    else if (v <= 5) dm = 350;
    else if (v <= 6) dm = 370;
    else if (v <= 7) dm = 400;
    else if (v <= 8) dm = 430;
    else if (v <= 9) dm = 450;
    else if (v <= 10) dm = 470;
    else if (v <= 11) dm = 500;
    else if (v <= 12) dm = 530;
    else if (v <= 13) dm = 550;
    else if (v <= 14) dm = 570;
    else if (v <= 15) dm = 600;
    else if (v <= 16) dm = 630;
    else if (v <= 17) dm = 650;
    else if (v <= 18) dm = 670;
    else if (v <= 19) dm = 700;
    else if (v <= 20) dm = 730;
    else if (v <= 21) dm = 750;
    else if (v <= 22) dm = 770;
    else if (v <= 23) dm = 800;
    else if (v <= 24) dm = 830;
    else if (v <= 25) dm = 850;
    else if (v <= 27) dm = 870;
    else if (v <= 29) dm = 900;

    if (!v || v < 0 || v > 29) dm = "?";
    else cnt += 1;
    $("#dm_t").text(dm);

    v = parseInt($("#qr").val().trim());

    if (v <= 3) qr = 300;
    else if (v <= 5) qr = 330;
    else if (v <= 7) qr = 350;
    else if (v <= 8) qr = 370;
    else if (v <= 9) qr = 400;
    else if (v <= 10) qr = 430;
    else if (v <= 11) qr = 450;
    else if (v <= 13) qr = 470;
    else if (v <= 15) qr = 500;
    else if (v <= 17) qr = 530;
    else if (v <= 19) qr = 550;
    else if (v <= 20) qr = 570;
    else if (v <= 21) qr = 600;
    else if (v <= 22) qr = 630;
    else if (v <= 23) qr = 650;
    else if (v <= 24) qr = 670;
    else if (v <= 25) qr = 700;
    else if (v <= 26) qr = 730;
    else if (v <= 27) qr = 750;
    else if (v <= 28) qr = 770;
    else if (v <= 29) qr = 800;
    else if (v <= 30) qr = 830;
    else if (v <= 32) qr = 850;
    else if (v <= 33) qr = 870;
    else if (v <= 36) qr = 900;

    if (!v || v < 0 || v > 36) qr = "?";
    else cnt += 1;
    $("#qr_t").text(qr);

    v = parseInt($("#ar").val().trim());
    if (v <= 5) ar = 300;
    else if (v <= 7) ar = 330;
    else if (v <= 9) ar = 350;
    else if (v <= 11) ar = 370;
    else if (v <= 13) ar = 400;
    else if (v <= 15) ar = 430;
    else if (v <= 17) ar = 450;
    else if (v <= 19) ar = 470;
    else if (v <= 21) ar = 500;
    else if (v <= 23) ar = 530;
    else if (v <= 25) ar = 550;
    else if (v <= 28) ar = 570;
    else if (v <= 30) ar = 600;
    else if (v <= 32) ar = 630;
    else if (v <= 34) ar = 650;
    else if (v <= 36) ar = 670;
    else if (v <= 38) ar = 700;
    else if (v <= 40) ar = 730;
    else if (v <= 42) ar = 750;
    else if (v <= 44) ar = 770;
    else if (v <= 46) ar = 800;
    else if (v <= 48) ar = 830;
    else if (v <= 50) ar = 850;
    else if (v <= 52) ar = 870;
    else if (v <= 55) ar = 900;

    if (!v || v < 0 || v > 55) ar = "?";
    else cnt += 1;
    $("#ar_t").text(ar);

    if (cnt > 3) $("#total").text(parseInt((ar + qr + dm + vr) / 4));

  }

  $("#vr, #dm, #qr, #ar").change(recalc);
  $("#vr, #dm, #qr, #ar").keyup(recalc);

})

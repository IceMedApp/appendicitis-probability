function crp_factor_app() {
    if (crp.value == '') {
        return 1;
    }
    else if (crp.value < 10) {
        return 0.741195658058578;
    }
    else if (crp.value >= 10) {
        return 1.17909895565026;
    }
    else {
        return 1;
    }
}
module.exports = (function () {
    const a_minusculo = "a".charCodeAt(0);
    const a_maiusculo = "A".charCodeAt(0);
    const z_minusculo = "z".charCodeAt(0);
    const z_maiusculo = "Z".charCodeAt(0);
    const tamanho_alfabeto = "abcdefghijklmnopqrstuvwxyz".length;

    function e_maiuscula(letra) {
        let codigo = letra.charCodeAt(0);
        if (codigo >= a_maiusculo && codigo <= z_maiusculo) return true;
        return false;
    }

    function e_minuscula(letra) {
        let codigo = letra.charCodeAt(0);
        if (codigo >= a_minusculo && codigo <= z_minusculo) return true;
        return false;
    }

    function criptografa_letra(letra) {
        let codigo = letra.charCodeAt(0);
        if (e_maiuscula(letra)) {
            codigo = codigo - a_maiusculo + 13;
            if (codigo >= tamanho_alfabeto) {
                codigo -= tamanho_alfabeto;
            }
            codigo += a_maiusculo;
        } else if (e_minuscula(letra)) {
            codigo = codigo - a_minusculo + 13;
            if (codigo >= tamanho_alfabeto) {
                codigo -= tamanho_alfabeto;
            }
            codigo += a_minusculo;
        }
        return String.fromCharCode(codigo);
    }

    function rot(string) {
        return string.split("").map(letra => criptografa_letra(letra)).join("");
    }

    return rot;

})();

var tt, ba, pt, at, as, bs;
var bs64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var known = "ABFINOSWabcdefgijlmnorstuvwy+-.(){}[] 0123456789";
ba = ["a", "p+"];
ab = ["0YQ"];
// r s j v n
at = "000v";
function pdE(s, k, p) {
    let o = s;
    for (let i = s.length % k; i < k; i++) {
        o += p;
    }
    return o;
}
window.onload = () => {
    tt = document.getElementById("text");
    pt = document.getElementById("props");
    as = document.getElementById("ascii");
    bs = document.getElementById("base64");
    ba.forEach((arg) => {
        let kt = arg
            .toString()
            .split("")
            .map((e) => e.charCodeAt().toString(4).padStart(4, "0"))
            .join("");
        tt.innerHTML += `<tr><td>${arg}</td><td>"${btoa(arg)}"</td><td>${kt.match(/.{1,4}/g).map((e) => e.padEnd(4, 0))}</td><td>${kt.match(/.{1,3}/g).map((e) => e.padEnd(3, 0))}</td></tr>`;
        let kt1 = kt.match(/.{1,4}/g).map((e) => {
            return parseInt(e.padEnd(4, 0), 4);
        });
        let kt2 = kt.match(/.{1,3}/g).map((e) => {
            return parseInt(e.padEnd(3, 0), 4);
        });
        tt.innerHTML += `<tr><td></td><td></td><td>${kt1}</td><td>${kt2}</td></tr>`;
    });
    ab.forEach((arg) => {
        let kt = arg
            .toString()
            .split("")
            .map((e) => bs64.indexOf(e).toString(4).padStart(3, "0"))
            .join("");
        tt.innerHTML += `<tr><td>${arg}</td><td>"${atob(arg)}"</td><td>${kt.match(/.{1,3}/g).map((e) => e.padEnd(3, 0))}</td><td>${kt.match(/.{1,4}/g).map((e) => e.padEnd(4, 0))}</td></tr>`;
        let kt2 = kt.match(/.{1,4}/g).map((e) => {
            return parseInt(e.padEnd(4, 0), 4);
        });
        let kt1 = kt.match(/.{1,3}/g).map((e) => {
            return parseInt(e.padEnd(3, 0), 4);
        });
        tt.innerHTML += `<tr><td></td><td></td><td>${kt1}</td><td>${kt2}</td></tr>`;
    });
    let ascii = Array(32);
    for (let i = 32; i < 127; i++) {
        ascii.push(String.fromCharCode(i));
        as.innerHTML += `<tr ${known.includes(String.fromCharCode(i)) ? "style='background-color:yellow'" : bs64.includes(String.fromCharCode(i)) ? "style='background-color:lightgray'" : ""}><td>${i}</td><td>${i.toString(4).padStart(4, 0)}</td><td>${String.fromCharCode(i)}</td>
        ${
            !known.includes(String.fromCharCode(i))
                ? `<td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(0, 3) == j.toString(4).padStart(3, 0).slice(0, 3)) {
                          return bs64[j];
                      }
                  })}</td><td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(3, 4) == j.toString(4).padStart(3, 0).slice(0, 1)) {
                          return bs64[j];
                      }
                  })}</td><td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(0, 2) == j.toString(4).padStart(3, 0).slice(1, 3)) {
                          return bs64[j];
                      }
                  })}</td><td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(2, 4) == j.toString(4).padStart(3, 0).slice(0, 2)) {
                          return bs64[j];
                      }
                  })}</td><td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(0, 1) == j.toString(4).padStart(3, 0).slice(2, 3)) {
                          return bs64[j];
                      }
                  })}</td><td>${bs64.split("").filter((e, j) => {
                      if (known.includes(bs64[j]) && i.toString(4).padStart(4, 0).slice(1, 4) == j.toString(4).padStart(3, 0).slice(0, 3)) {
                          return bs64[j];
                      }
                  })}</td>`
                : ""
        }</tr>`;
    }
    for (let i = 0; i < 64; i++) {
        bs.innerHTML += `<tr ${known.includes(bs64[i]) ? "style='background-color:yellow'" : ""}><td>${i}</td><td>${i.toString(4).padStart(3, 0)}</td><td>${bs64[i]}</td>
        ${
            !known.includes(bs64[i])
                ? `<td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(0, 3) == j.toString(4).padStart(4, 0).slice(0, 3)) {
                          return ascii[j];
                      }
                  })}</td><td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(0, 1) == j.toString(4).padStart(4, 0).slice(3, 4)) {
                          return ascii[j];
                      }
                  })}</td><td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(1, 3) == j.toString(4).padStart(4, 0).slice(0, 2)) {
                          return ascii[j];
                      }
                  })}</td><td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(0, 2) == j.toString(4).padStart(4, 0).slice(2, 4)) {
                          return ascii[j];
                      }
                  })}</td><td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(2, 3) == j.toString(4).padStart(4, 0).slice(0, 1)) {
                          return ascii[j];
                      }
                  })}</td><td>${ascii.filter((e, j) => {
                      if (known.includes(ascii[j]) && i.toString(4).padStart(3, 0).slice(0, 3) == j.toString(4).padStart(4, 0).slice(1, 4)) {
                          return ascii[j];
                      }
                  })}</td>`
                : ""
        }</tr>`;
    }
};
//undifalstreN
//cov (space) (){}[]
//Iy+.-
//

function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  // Definisi data verteks 3 buah titik
  /**
   * Titik A (-0.5, -0.5)
   * Titik B ( 0.5, -0.5)
   * Titik C ( 0.5,  0.5)
   * Titik D (-0.5,  0.5)
   */
  var vertices = [
   // -0.5, -0.5, 1.0, 0.0, 0.0,      // Titik A, MERAH
   // 0.5, -0.5, 0.0, 1.0, 0.0,       // Titik B, HIJAU
   // 0.5, 0.5, 0.0, 0.0, 1.0,        // Titik C, BIRU
  //  -0.5, -0.5, 1.0, 1.0, 1.0,      // Titik A, PUTIH
   // 0.5, 0.5, 1.0, 1.0, 1.0,        // Titik C, PUTIH
   // -0.5, 0.5, 1.0, 1.0, 1.0        // Titik D, PUTIH
   
   // ANGKA 1
   -0.5, 0.3, 1.0, 1.0, 1.0, //A
   -0.5, 0.8, 1.0, 1.0, 1.0, //B
   -0.4, 0.8, 1.0, 1.0, 1.0, //C
   -0.4, 0.3, 1.0, 1.0, 1.0, //D

   // ANGKA 4
     0.0, 0.3, 1.0, 1.0, 1.0,  //A
     0.0, 0.6, 1.0, 1.0, 1.0,  //B
    -0.2, 0.6, 1.0, 1.0, 1.0,  //C
    -0.2, 0.675, 1.0, 1.0, 1.0, //D
     0.0, 0.8, 1.0, 1.0, 1.0, //E
     0.1, 0.8, 1.0, 1.0, 1.0, //F
     0.1, 0.3, 1.0, 1.0, 1.0, //G
     0.0, 0.3, 1.0, 1.0, 1.0,  //H

     //ANGKA 4 (1)
    -0.15, 0.65, 1.0, 1.0, 1.0,  //A
    0.0, 0.74, 1.0, 1.0, 1.0,  //B
    0.07, 0.74, 1.0, 1.0, 1.0, //C
    0.07, 0.65, 1.0, 1.0, 1.0, //D
    -0.15, 0.65, 1.0, 1.0, 1.0,  //E

     // ANGKA 6
    0.2, 0.3, 1.0, 1.0, 1.0,  //A
    0.2, 0.8, 1.0, 1.0, 1.0, //B
    0.3, 0.8, 1.0, 1.0, 1.0, //C
    0.3, 0.555, 1.0, 1.0, 1.0, //D
    0.5, 0.555, 1.0, 1.0, 1.0, //E
    0.5, 0.3, 1.0, 1.0, 1.0, //F
    0.2, 0.3, 1.0, 1.0, 1.0,  //G

    //ANGKA 6 (1)
    0.25, 0.35, 1.0, 1.0, 1.0,  //A
    0.25, 0.5, 1.0, 1.0, 1.0,  //B
    0.45, 0.5, 1.0, 1.0, 1.0,  //C
    0.45, 0.35, 1.0, 1.0, 1.0,  //D
    0.25, 0.35, 1.0, 1.0, 1.0,  //E




    // HURUF 

    //huruf A1
    -0.18, -0.8, 1.0, 1.0, 1.0, //A
    -0.33, -0.6, 1.0, 1.0, 1.0, //B
    -0.28, -0.8, 1.0, 1.0, 1.0, //C
    //A2
    -0.18, -0.8, 1.0, 1.0, 1.0, //A
    -0.33, -0.6, 1.0, 1.0, 1.0, //B
    -0.26, -0.48, 1.0, 1.0, 1.0,//C
    //A3
    -0.26, -0.48, 1.0, 1.0, 1.0, //A
    -0.33, -0.6, 1.0, 1.0, 1.0, //B
    -0.35, -0.5, 1.0, 1.0, 1.0,//C
    //A4
    -0.33, -0.6, 1.0, 1.0, 1.0, //A
    -0.35, -0.5, 1.0, 1.0, 1.0, //B
    -0.45, -0.5, 1.0, 1.0, 1.0, //C
    //A5
    -0.33, -0.6, 1.0, 1.0, 1.0, //A
    -0.45, -0.5, 1.0, 1.0, 1.0, //B
    -0.47, -0.6, 1.0, 1.0, 1.0,// C

    //A6
    -0.26, -0.48, 1.0, 1.0, 1.0, //A
    -0.35, -0.5, 1.0, 1.0, 1.0, //B
    -0.32, -0.202, 1.0, 1.0, 1.0,//C
    //A7
    -0.32, -0.202, 1.0, 1.0, 1.0, //A
    -0.385, -0.32, 1.0, 1.0, 1.0, //B
    -0.35, -0.5, 1.0, 1.0, 1.0, //C
    //A8
    -0.32, -0.202, 1.0, 1.0, 1.0, //A
    -0.385, -0.32, 1.0, 1.0, 1.0, //B
    -0.415, -0.32, 1.0, 1.0, 1.0, //C
    //A9
    -0.32, -0.202, 1.0, 1.0, 1.0, //A
    -0.475, -0.202, 1.0, 1.0, 1.0, //B
    -0.415, -0.32, 1.0, 1.0, 1.0, //C
    //A10
    -0.475, -0.202, 1.0, 1.0, 1.0, //A
    -0.415, -0.32, 1.0, 1.0, 1.0, //B
    -0.45, -0.5, 1.0, 1.0, 1.0, //C
    //A11
    -0.475, -0.202, 1.0, 1.0, 1.0, //A
    -0.45, -0.5, 1.0, 1.0, 1.0, //B
    -0.54, -0.48, 1.0, 1.0, 1.0, //C
    //A12
    -0.45, -0.5, 1.0, 1.0, 1.0, //A
    -0.54, -0.48, 1.0, 1.0, 1.0, //B
    -0.47, -0.6, 1.0, 1.0, 1.0,// C
    //A13
    -0.47, -0.6, 1.0, 1.0, 1.0,// A
    -0.62, -0.8, 1.0, 1.0, 1.0, //B
    -0.54, -0.48, 1.0, 1.0, 1.0, //C
    //A14
    -0.47, -0.6, 1.0, 1.0, 1.0,// A
    -0.62, -0.8, 1.0, 1.0, 1.0, //B
    -0.52, -0.8, 1.0, 1.0, 1.0, //C

    //N1
    0.18, -0.8, 1.0, 1.0, 1.0, //A
    0.33, -0.6, 1.0, 1.0, 1.0, //B
    0.33, -0.8, 1.0, 1.0, 1.0, //C
    
    //N2
    0.18, -0.8, 1.0, 1.0, 1.0, //A
    0.18, -0.6, 1.0, 1.0, 1.0, //B
    0.33, -0.6, 1.0, 1.0, 1.0, //C

    //N3
    0.18, -0.6, 1.0, 1.0, 1.0, //A
    0.33, -0.4, 1.0, 1.0, 1.0, //B
    0.33, -0.6, 1.0, 1.0, 1.0, //C

    //N4
    0.18, -0.4, 1.0, 1.0, 1.0, //A
    0.18, -0.6, 1.0, 1.0, 1.0, //B
    0.33, -0.4, 1.0, 1.0, 1.0, //C

    //N5
    0.18, -0.4, 1.0, 1.0, 1.0, //A
    0.33, -0.2, 1.0, 1.0, 1.0, //B
    0.33, -0.4, 1.0, 1.0, 1.0, //C

    //N6
    0.18, -0.2, 1.0, 1.0, 1.0, //A
    0.18, -0.4, 1.0, 1.0, 1.0, //B
    0.33, -0.2, 1.0, 1.0, 1.0, //C

    //N7
    0.33, -0.2, 1.0, 1.0, 1.0, //A
    0.45, -0.2, 1.0, 1.0, 1.0, //B
    0.33, -0.4, 1.0, 1.0, 1.0, //C

    //N8
    0.45, -0.2, 1.0, 1.0, 1.0, //A
    0.65, -0.8, 1.0, 1.0, 1.0, //B
    0.33, -0.4, 1.0, 1.0, 1.0, //C
  
    //N9
    0.65, -0.8, 1.0, 1.0, 1.0, //A
    0.65, -0.5, 1.0, 1.0, 1.0, //B
    0.45, -0.2, 1.0, 1.0, 1.0, //C

  //N10
  0.65, -0.2, 1.0, 1.0, 1.0, //A
  0.8, -0.2, 1.0, 1.0, 1.0, //B
  0.65, -0.8, 1.0, 1.0, 1.0, //C

//N11
    0.65, -0.8, 1.0, 1.0, 1.0, //A
    0.8, -0.2, 1.0, 1.0, 1.0, //B
    0.8, -0.8, 1.0, 1.0, 1.0, //C
  ];

  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var vertexShaderSource = document.getElementById("vertexShaderSource").text;
  var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

  // Buat .c di GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Kompilasi .c agar menjadi .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Siapkan wadah untuk .exe (shader program)
  var shaderProgram = gl.createProgram();

  // Masukkan .o ke dalam wadah .exe
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Sambungkan antar .o agar bisa menjadi
  //    runnable context di dalam wadah .exe tadi
  gl.linkProgram(shaderProgram);

  // Mulai menggunakan konteks (cat)
  gl.useProgram(shaderProgram);

  // Ajarkan attribute a_Position di GPU
  //  tentang pengambilan data verteks dari ARRAY_BUFFER
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  gl.vertexAttribPointer(
    aPositionLoc, 
    2, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    0);
  gl.vertexAttribPointer(
    aColorLoc, 
    3, 
    gl.FLOAT, 
    false, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(100, 0, canvas.height, canvas.height);

  // var primitive = gl.LINE_LOOP;
//  var offset = 0;
 // var nVertex = 6;
 // gl.drawArrays(primitive, offset, nVertex);

 // ANGKA 1
 var primitive = gl.LINE_LOOP;
    offset = 0;
    nVertex = 4;
    gl.drawArrays(primitive, offset, nVertex); 
    
// ANGKA 4
var primitive = gl.LINE_STRIP;
offset += nVertex;
nVertex = 8;
gl.drawArrays(primitive, offset, nVertex); 

// ANGKA 4 (1)
var primitive = gl.LINE_STRIP;
offset += nVertex;
nVertex = 5;
gl.drawArrays(primitive, offset, nVertex); 
  
// ANGKA 6
var primitive = gl.LINE_STRIP;
offset += nVertex;
nVertex = 7;
gl.drawArrays(primitive, offset, nVertex); 
  
// ANGKA 6
var primitive = gl.LINE_STRIP;
offset += nVertex;
nVertex = 5;
gl.drawArrays(primitive, offset, nVertex); 


//A1
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A2
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A3
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A4
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A5
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A6
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A7
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A8
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
//A9
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
// A10
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
// A11
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
// A12
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
// A13
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
// A14
var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);

var primitive = gl.TRIANGLE_STRIP;
offset += nVertex;
var nVertex = 3;
gl.drawArrays(primitive, offset, nVertex);
}

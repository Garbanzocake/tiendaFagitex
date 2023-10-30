const { Router } = require("express");
const { check } = require("express-validator");
const {
  actualizarImagenCloudinary,
  actualizarImagenesCloudinary,
  limpiarImagenesCloudinary,
} = require("../controllers/uploads.controller");
const { coleccionesPermitidas } = require("../helpers");
const { validarArchivoSubir, validarCampos } = require("../middlewares");

const router = Router();

router.put(
  "/:coleccion/:id",
  [
    validarArchivoSubir,
    check("id", "El id debe ser un id de mongo").isMongoId(),
    check("coleccion").custom((c) =>
      coleccionesPermitidas(c, ["usuarios", "productos", "stickers"])
    ),
    validarCampos,
  ],
  actualizarImagenCloudinary
);

router.put(
  "/:coleccion/:id/imgs",
  [
    validarArchivoSubir,
    check("id", "El id debe ser un id de mongo").isMongoId(),
    check("coleccion").custom((c) =>
      coleccionesPermitidas(c, ["usuarios", "productos", "stickers"])
    ),
    validarCampos,
  ],
  actualizarImagenesCloudinary
);

router.delete(
  "/:coleccion/:id/imgs",
  [
    check("id", "El id debe ser un id de mongo").isMongoId(),
    check("coleccion").custom((c) =>
      coleccionesPermitidas(c, ["usuarios", "productos", "stickers"])
    ),
    validarCampos,
  ],
  limpiarImagenesCloudinary
);





module.exports = router;

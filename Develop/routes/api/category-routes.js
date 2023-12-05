const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const payload = await Category.findAll({ include: [Product] });
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const payload = await Category.findByPk(req.params.id, { include: [Product] });
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.post('/', async (req, res) => {
  try {
    const payload = await Category.create(req.body)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const payload = await Category.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const payload = await Category.destroy({
      where: { id: req.params.id }
    })
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

module.exports = router;

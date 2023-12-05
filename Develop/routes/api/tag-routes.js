const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const payload = await Tag.findAll({ include: [Product] });
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const payload = await Tag.findByPk(req.params.id, { include: [Product] });
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.post('/', async (req, res) => {
  try {
    const payload = await Tag.create(req.body)
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const payload = await Tag.update(
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
    const payload = await Tag.destroy({
      where: { id: req.params.id }
    })
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message })
  }
});

module.exports = router;

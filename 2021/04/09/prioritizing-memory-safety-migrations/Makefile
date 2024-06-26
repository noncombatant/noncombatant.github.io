pngs = \
formats.png\
surface-01.png\
surface-02.png\
surface-03.png\
surface-04.png

%.png: %.dot
	dot -Tpng $< > $@

pngs: $(pngs)

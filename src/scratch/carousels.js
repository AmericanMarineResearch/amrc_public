<div style={styles.section5}>
          <CarouselProvider
            naturalSlideWidth={80}
            naturalSlideHeight={35}
            totalSlides={__ADVISORS__.length}
          >
            <Slider>
              { 
                __ADVISORS__.map((item, index) => 
                  <Slide index={index}>
                    <AdvisorCard {...item} />
                  </Slide> )
              }

            </Slider>
            <DotGroup />

            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>

          </CarouselProvider>
        </div>
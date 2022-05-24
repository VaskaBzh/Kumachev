import webpack from 'webpack-stream'

export const jsProjects = () => {
    return app.gulp.src(app.path.src.jsProjects, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'appProjects.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        
        .pipe(app.gulp.src(app.path.src.jsProject, { sourcemaps: app.isDev }))
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'appProject.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}
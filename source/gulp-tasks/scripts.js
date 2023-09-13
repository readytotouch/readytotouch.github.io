import { dest } from "gulp";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import browserify from "browserify";
import hash from "gulp-hash-filename";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import es from "event-stream";
import glob from "glob";

export function script(done, inputJs, outputJs) {
	glob(inputJs, (err, files) => {
		if (err) {
			done(err);
		}
		const tasks = files.map((entry) => {
			return browserify({ entries: [entry] })
				.transform(babelify)
				.bundle()
				.pipe(source(entry.slice(entry.lastIndexOf("/") + 1)))
				.pipe(buffer())
				.pipe(sourcemaps.init())
				.pipe(sourcemaps.write("./"))
				.pipe(dest(outputJs));
		});
		es.merge(tasks).on("end", done);
	});
}

export function scriptBuild(done, inputJs, outputJs) {
	glob(inputJs, (err, files) => {
		if (err) {
			done(err);
		}
		const tasks = files.map((entry) => {
			return browserify({ entries: [entry] })
				.transform(babelify)
				.bundle()
				.pipe(source(entry.slice(entry.lastIndexOf("/") + 1)))
				.pipe(buffer())
				.pipe(
					hash({
						format: "{name}_{hash}{ext}",
					}),
				)
				.pipe(uglify())
				.pipe(dest(outputJs));
		});
		es.merge(tasks).on("end", done);
	});
}

import com.intellij.database.model.DasObjectWithSource
import com.intellij.database.model.DasSchemaChild
import com.intellij.database.util.DasUtil

LAYOUT.ignoreDependencies = true
LAYOUT.baseName { ctx -> baseName(ctx.object) }


def baseName(obj) {
  def schema = DasUtil.getSchema(obj)
  def file = fileName(obj)
  if (schema.isEmpty()) {
    return file
  }
  else {
    return sanitize(schema) + "/" + file
  }
}

def fileName(obj) {
  for (def cur = obj; cur != null; cur = cur.dasParent) {
    if (storeSeparately(cur)) return sanitize(cur.name)
  }
  return sanitize(obj.name)
}

def storeSeparately(obj) {
  return obj instanceof DasObjectWithSource || obj instanceof DasSchemaChild
}

def sanitize(name) {
  return name.replace('/', 'slash')
}
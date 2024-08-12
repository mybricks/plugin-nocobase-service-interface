import { uuid } from '../../../utils';

export function getLast(list: any[]) {
  return list ? list[list.length - 1] : {};
}

export function schema2params(schema: any) {
  function proItem(schema, key, obj) {
    let cur = obj;
    if (key) {
      cur = {
        id: uuid(),
        name: key,
        type: schema.type,
        children: [],
      };
      obj.children.push(cur);
    }

    if (schema.type === 'array') {
      const item = {
        id: uuid(),
        name: 'items',
        type: schema.items?.type || 'object',
        children: [],
      };
      cur.children.push(item);
      proAry(schema, item);
    } else if (schema.type === 'object') {
      proObj(schema, cur);
    }
  }

  function proObj(curSchema, obj) {
    Object.keys(curSchema.properties || {}).map((key) => {
      return proItem(curSchema.properties[key], key, obj);
    });
  }

  function proAry(curSchema, obj) {
    Object.keys(curSchema.items?.properties || {}).map((key) => {
      proItem(curSchema.items.properties[key], key, obj);
    });
  }
  let obj = { name: 'root', type: 'root', children: [] };
  proItem(schema, '', obj);
  return obj;
}

function setValue(source: any, target: any) {
  [
    'type',
    'defaultValue',
    'minItems',
    'maxItems',
    'minLength',
    'maxLength',
    'minimum',
    'maximum',
  ].forEach((key) => {
    if (source[key] !== void 0) {
      target[key === 'defaultValue' ? 'default' : key] = source[key];
    }
  });
}

export function params2schema(params: any) {
  if (!params) return;
  let obj: any = {};
  const { type } = params;

  if (type === 'string' || type === 'number') {
    const val: any = {};
    setValue(params, val);
    return val;
  }

  if (params.children) {
    params.children.forEach((child) => {
      obj.type = type;
      if (type === 'object' || type === 'root') {
        obj.type = 'object';
        obj.properties = obj.properties || {};
        obj.properties[child.name] = params2schema(child);
      } else {
        setValue(params, obj);
        obj[child.name] = params2schema(child);
      }
    });
  }
  return obj;
}

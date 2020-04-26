---
title: MeshVariationDatabaseMaterial
---

## Summary

### Constructors

|  |
| --- |
| **[MeshVariationDatabaseMaterial](#constructor-0)**() |
| **[MeshVariationDatabaseMaterial](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "material" >}} | [MeshMaterial](/vext/ref/fb/meshmaterial) \| nil |
| {{< prop "materialVariation" >}} | [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation) \| nil |
| {{< prop "textureParameters" >}} | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationDatabaseMaterial" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeshVariationDatabaseMaterial {#constructor-0}

> **MeshVariationDatabaseMaterial**()

Creates a new [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) frostbite instance.

### MeshVariationDatabaseMaterial {#constructor-1}

> **MeshVariationDatabaseMaterial**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "material" %}}

> **[MeshMaterial](/vext/ref/fb/meshmaterial)** \| **nil**

### {{% prop-heading "materialVariation" %}}

> **[MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation)** \| **nil**

### {{% prop-heading "textureParameters" %}}

> **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)**[]

## Methods

### Clone {#clone}

> **Clone**(): [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) type.


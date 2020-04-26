---
title: MeshVariationDatabaseMaterial
---


## Summary
### Constructors
| |
| ----------- |
| **[MeshVariationDatabaseMaterial](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "material" >}} | [MeshMaterial](/vext/ref/fb/meshmaterial) \| nil |
| {{< prop "materialVariation" >}} | [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation) \| nil |
| {{< prop "textureParameters" >}} | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshVariationDatabaseMaterial" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshVariationDatabaseMaterial {#constructor-0}
> **MeshVariationDatabaseMaterial**()

Creates a new [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) frostbite structure.

## Properties
### {{% prop-heading "material" %}}
> **[MeshMaterial](/vext/ref/fb/meshmaterial)** | **nil**

### {{% prop-heading "materialVariation" %}}
> **[MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation)** | **nil**

### {{% prop-heading "textureParameters" %}}
> **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)**[]

## Methods
### Clone
> **Clone**(): [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshVariationDatabaseMaterial](/vext/ref/fb/meshvariationdatabasematerial) type.


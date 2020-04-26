---
title: TerrainQuadDecalAtlasTile
---


## Summary
### Constructors
| |
| ----------- |
| **[TerrainQuadDecalAtlasTile](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "tileIndexX" >}} | int |
| {{< prop "tileIndexY" >}} | int |
| {{< prop "tileCountX" >}} | int |
| {{< prop "tileCountY" >}} | int |
| {{< prop "flipX" >}} | bool |
| {{< prop "flipY" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TerrainQuadDecalAtlasTile" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TerrainQuadDecalAtlasTile {#constructor-0}
> **TerrainQuadDecalAtlasTile**()

Creates a new [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) frostbite structure.

## Properties
### {{% prop-heading "tileIndexX" %}}
> **int**

### {{% prop-heading "tileIndexY" %}}
> **int**

### {{% prop-heading "tileCountX" %}}
> **int**

### {{% prop-heading "tileCountY" %}}
> **int**

### {{% prop-heading "flipX" %}}
> **bool**

### {{% prop-heading "flipY" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TerrainQuadDecalAtlasTile](/vext/ref/fb/terrainquaddecalatlastile) type.


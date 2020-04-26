---
title: MeshMaterialVariation
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MeshMaterialVariation](#constructor-0)**() |
| **[MeshMaterialVariation](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshMaterialVariation](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "shader" >}} | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshMaterialVariation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshMaterialVariation {#constructor-0}
> **MeshMaterialVariation**()

Creates a new [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation) frostbite instance.

### MeshMaterialVariation {#constructor-1}
> **MeshMaterialVariation**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshMaterialVariation {#constructor-2}
> **MeshMaterialVariation**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation). |

## Properties
### {{% prop-heading "shader" %}}
> **[SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshMaterialVariation](/vext/ref/fb/meshmaterialvariation) type.


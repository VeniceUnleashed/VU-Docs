---
title: MeshMaterial
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MeshMaterial](#constructor-0)**() |
| **[MeshMaterial](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshMaterial](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "shaderInstance" >}} | [SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata) \| nil |
| {{< prop "shader" >}} | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshMaterial" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshMaterial {#constructor-0}
> **MeshMaterial**()

Creates a new [MeshMaterial](/vext/ref/fb/meshmaterial) frostbite instance.

### MeshMaterial {#constructor-1}
> **MeshMaterial**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshMaterial](/vext/ref/fb/meshmaterial) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshMaterial {#constructor-2}
> **MeshMaterial**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshMaterial](/vext/ref/fb/meshmaterial). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshMaterial](/vext/ref/fb/meshmaterial). |

## Properties
### {{% prop-heading "shaderInstance" %}}
> **[SurfaceShaderInstanceData](/vext/ref/fb/surfaceshaderinstancedata)** | **nil**

### {{% prop-heading "shader" %}}
> **[SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshMaterial](/vext/ref/fb/meshmaterial) type.


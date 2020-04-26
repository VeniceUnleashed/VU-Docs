---
title: ShaderGraph
---

Inherits from 
[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)

## Summary
### Constructors
| |
| ----------- |
| **[ShaderGraph](#constructor-0)**() |
| **[ShaderGraph](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ShaderGraph](#constructor-2)**(other: [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)) |
| **[ShaderGraph](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ShaderGraph](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxSubMaterialCount" >}} | int |
| {{< prop "gammaCorrectionEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ShaderGraph" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ShaderGraph {#constructor-0}
> **ShaderGraph**()

Creates a new [ShaderGraph](/vext/ref/fb/shadergraph) frostbite instance.

### ShaderGraph {#constructor-1}
> **ShaderGraph**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ShaderGraph](/vext/ref/fb/shadergraph) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ShaderGraph {#constructor-2}
> **ShaderGraph**(other: [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset))

Casts an instance of type [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) to [ShaderGraph](/vext/ref/fb/shadergraph). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) | The instance to cast to [ShaderGraph](/vext/ref/fb/shadergraph). |

### ShaderGraph {#constructor-3}
> **ShaderGraph**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ShaderGraph](/vext/ref/fb/shadergraph). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ShaderGraph](/vext/ref/fb/shadergraph). |

### ShaderGraph {#constructor-4}
> **ShaderGraph**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderGraph](/vext/ref/fb/shadergraph). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ShaderGraph](/vext/ref/fb/shadergraph). |

## Properties
### {{% prop-heading "maxSubMaterialCount" %}}
> **int**

### {{% prop-heading "gammaCorrectionEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ShaderGraph](/vext/ref/fb/shadergraph) type.


---
title: MeshSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MeshSettings](#constructor-0)**() |
| **[MeshSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "overrideShadersShaderName" >}} | string |
| {{< prop "overrideShadersMeshName" >}} | string |
| {{< prop "forceLod" >}} | int |
| {{< prop "globalLodScale" >}} | float |
| {{< prop "shadowDistanceScale" >}} | float |
| {{< prop "loadingEnabled" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshSettings {#constructor-0}
> **MeshSettings**()

Creates a new [MeshSettings](/vext/ref/fb/meshsettings) frostbite instance.

### MeshSettings {#constructor-1}
> **MeshSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshSettings](/vext/ref/fb/meshsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshSettings {#constructor-2}
> **MeshSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshSettings](/vext/ref/fb/meshsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshSettings](/vext/ref/fb/meshsettings). |

## Properties
### {{% prop-heading "overrideShadersShaderName" %}}
> **string**

### {{% prop-heading "overrideShadersMeshName" %}}
> **string**

### {{% prop-heading "forceLod" %}}
> **int**

### {{% prop-heading "globalLodScale" %}}
> **float**

### {{% prop-heading "shadowDistanceScale" %}}
> **float**

### {{% prop-heading "loadingEnabled" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshSettings](/vext/ref/fb/meshsettings) type.


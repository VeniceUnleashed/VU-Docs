---
title: DebrisSystemSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[DebrisSystemSettings](#constructor-0)**() |
| **[DebrisSystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DebrisSystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "meshDrawCountLimit" >}} | int |
| {{< prop "timeScale" >}} | float |
| {{< prop "meshCullingDistance" >}} | float |
| {{< prop "drawStats" >}} | int |
| {{< prop "meshBatchCountLimit" >}} | int |
| {{< prop "meshStreamingPriorityMultiplier" >}} | float |
| {{< prop "meshRenderingEnable" >}} | bool |
| {{< prop "enableJobs" >}} | bool |
| {{< prop "meshShadowEnable" >}} | bool |
| {{< prop "meshViewCullingEnable" >}} | bool |
| {{< prop "meshHavokRenderingEnable" >}} | bool |
| {{< prop "meshDrawTransforms" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "meshDrawBoundingBoxes" >}} | bool |
| {{< prop "meshDrawCullStats" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebrisSystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebrisSystemSettings {#constructor-0}
> **DebrisSystemSettings**()

Creates a new [DebrisSystemSettings](/vext/ref/fb/debrissystemsettings) frostbite instance.

### DebrisSystemSettings {#constructor-1}
> **DebrisSystemSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DebrisSystemSettings](/vext/ref/fb/debrissystemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DebrisSystemSettings {#constructor-2}
> **DebrisSystemSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebrisSystemSettings](/vext/ref/fb/debrissystemsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DebrisSystemSettings](/vext/ref/fb/debrissystemsettings). |

## Properties
### {{% prop-heading "meshDrawCountLimit" %}}
> **int**

### {{% prop-heading "timeScale" %}}
> **float**

### {{% prop-heading "meshCullingDistance" %}}
> **float**

### {{% prop-heading "drawStats" %}}
> **int**

### {{% prop-heading "meshBatchCountLimit" %}}
> **int**

### {{% prop-heading "meshStreamingPriorityMultiplier" %}}
> **float**

### {{% prop-heading "meshRenderingEnable" %}}
> **bool**

### {{% prop-heading "enableJobs" %}}
> **bool**

### {{% prop-heading "meshShadowEnable" %}}
> **bool**

### {{% prop-heading "meshViewCullingEnable" %}}
> **bool**

### {{% prop-heading "meshHavokRenderingEnable" %}}
> **bool**

### {{% prop-heading "meshDrawTransforms" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "meshDrawBoundingBoxes" %}}
> **bool**

### {{% prop-heading "meshDrawCullStats" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebrisSystemSettings](/vext/ref/fb/debrissystemsettings) type.


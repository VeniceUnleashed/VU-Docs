---
title: OcclusionSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[OcclusionSettings](#constructor-0)**() |
| **[OcclusionSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OcclusionSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enable" >}} | bool |
| {{< prop "drawZbuffer" >}} | bool |
| {{< prop "drawBinaryBuffer" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OcclusionSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OcclusionSettings {#constructor-0}
> **OcclusionSettings**()

Creates a new [OcclusionSettings](/vext/ref/fb/occlusionsettings) frostbite instance.

### OcclusionSettings {#constructor-1}
> **OcclusionSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OcclusionSettings](/vext/ref/fb/occlusionsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OcclusionSettings {#constructor-2}
> **OcclusionSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OcclusionSettings](/vext/ref/fb/occlusionsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OcclusionSettings](/vext/ref/fb/occlusionsettings). |

## Properties
### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "drawZbuffer" %}}
> **bool**

### {{% prop-heading "drawBinaryBuffer" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OcclusionSettings](/vext/ref/fb/occlusionsettings) type.


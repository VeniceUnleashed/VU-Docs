---
title: AudioGraphParameter
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AudioGraphParameter](#constructor-0)**() |
| **[AudioGraphParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AudioGraphParameter](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | float |
| {{< prop "nameHash" >}} | int |
| {{< prop "valueIndex" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioGraphParameter {#constructor-0}
> **AudioGraphParameter**()

Creates a new [AudioGraphParameter](/vext/ref/fb/audiographparameter) frostbite instance.

### AudioGraphParameter {#constructor-1}
> **AudioGraphParameter**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AudioGraphParameter](/vext/ref/fb/audiographparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AudioGraphParameter {#constructor-2}
> **AudioGraphParameter**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphParameter](/vext/ref/fb/audiographparameter). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AudioGraphParameter](/vext/ref/fb/audiographparameter). |

## Properties
### {{% prop-heading "defaultValue" %}}
> **float**

### {{% prop-heading "nameHash" %}}
> **int**

### {{% prop-heading "valueIndex" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioGraphParameter](/vext/ref/fb/audiographparameter) type.


---
title: SoundScopeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoundScopeData](#constructor-0)**() |
| **[SoundScopeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundScopeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "defaultStrategy" >}} | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundScopeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundScopeData {#constructor-0}
> **SoundScopeData**()

Creates a new [SoundScopeData](/vext/ref/fb/soundscopedata) frostbite instance.

### SoundScopeData {#constructor-1}
> **SoundScopeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundScopeData](/vext/ref/fb/soundscopedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundScopeData {#constructor-2}
> **SoundScopeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeData](/vext/ref/fb/soundscopedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundScopeData](/vext/ref/fb/soundscopedata). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "defaultStrategy" %}}
> **[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundScopeData](/vext/ref/fb/soundscopedata) type.


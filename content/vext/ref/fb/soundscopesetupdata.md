---
title: SoundScopeSetupData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoundScopeSetupData](#constructor-0)**() |
| **[SoundScopeSetupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundScopeSetupData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "mappings" >}} | [SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundScopeSetupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundScopeSetupData {#constructor-0}
> **SoundScopeSetupData**()

Creates a new [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata) frostbite instance.

### SoundScopeSetupData {#constructor-1}
> **SoundScopeSetupData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundScopeSetupData {#constructor-2}
> **SoundScopeSetupData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "mappings" %}}
> **[SoundScopeStrategyMapping](/vext/ref/fb/soundscopestrategymapping)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata) type.


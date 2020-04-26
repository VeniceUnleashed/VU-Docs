---
title: EntryComponentSoundData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EntryComponentSoundData](#constructor-0)**() |
| **[EntryComponentSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntryComponentSoundData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stanceSounds" >}} | [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)[] |
| {{< prop "stanceSwitchSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntryComponentSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntryComponentSoundData {#constructor-0}
> **EntryComponentSoundData**()

Creates a new [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata) frostbite instance.

### EntryComponentSoundData {#constructor-1}
> **EntryComponentSoundData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntryComponentSoundData {#constructor-2}
> **EntryComponentSoundData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata). |

## Properties
### {{% prop-heading "stanceSounds" %}}
> **[StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)**[]

### {{% prop-heading "stanceSwitchSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntryComponentSoundData](/vext/ref/fb/entrycomponentsounddata) type.


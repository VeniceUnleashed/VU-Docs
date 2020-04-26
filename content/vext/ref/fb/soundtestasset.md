---
title: SoundTestAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundTestAsset](#constructor-0)**() |
| **[SoundTestAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundTestAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundTestAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "taskSpecs" >}} | [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)[] |
| {{< prop "testSpecs" >}} | [SoundTestSpec](/vext/ref/fb/soundtestspec)[] |
| {{< prop "suites" >}} | [SoundTestSuite](/vext/ref/fb/soundtestsuite)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundTestAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundTestAsset {#constructor-0}
> **SoundTestAsset**()

Creates a new [SoundTestAsset](/vext/ref/fb/soundtestasset) frostbite instance.

### SoundTestAsset {#constructor-1}
> **SoundTestAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundTestAsset](/vext/ref/fb/soundtestasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundTestAsset {#constructor-2}
> **SoundTestAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundTestAsset](/vext/ref/fb/soundtestasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundTestAsset](/vext/ref/fb/soundtestasset). |

### SoundTestAsset {#constructor-3}
> **SoundTestAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestAsset](/vext/ref/fb/soundtestasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundTestAsset](/vext/ref/fb/soundtestasset). |

## Properties
### {{% prop-heading "taskSpecs" %}}
> **[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)**[]

### {{% prop-heading "testSpecs" %}}
> **[SoundTestSpec](/vext/ref/fb/soundtestspec)**[]

### {{% prop-heading "suites" %}}
> **[SoundTestSuite](/vext/ref/fb/soundtestsuite)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundTestAsset](/vext/ref/fb/soundtestasset) type.


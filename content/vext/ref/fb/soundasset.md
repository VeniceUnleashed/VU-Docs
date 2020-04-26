---
title: SoundAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundAsset](#constructor-0)**() |
| **[SoundAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scope" >}} | [SoundScopeData](/vext/ref/fb/soundscopedata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundAsset {#constructor-0}
> **SoundAsset**()

Creates a new [SoundAsset](/vext/ref/fb/soundasset) frostbite instance.

### SoundAsset {#constructor-1}
> **SoundAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundAsset](/vext/ref/fb/soundasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundAsset {#constructor-2}
> **SoundAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundAsset](/vext/ref/fb/soundasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundAsset](/vext/ref/fb/soundasset). |

### SoundAsset {#constructor-3}
> **SoundAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundAsset](/vext/ref/fb/soundasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundAsset](/vext/ref/fb/soundasset). |

## Properties
### {{% prop-heading "scope" %}}
> **[SoundScopeData](/vext/ref/fb/soundscopedata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundAsset](/vext/ref/fb/soundasset) type.


---
title: UIAudioEventAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIAudioEventAsset](#constructor-0)**() |
| **[UIAudioEventAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIAudioEventAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIAudioEventAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "audioEventMappings" >}} | [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIAudioEventAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIAudioEventAsset {#constructor-0}
> **UIAudioEventAsset**()

Creates a new [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset) frostbite instance.

### UIAudioEventAsset {#constructor-1}
> **UIAudioEventAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIAudioEventAsset {#constructor-2}
> **UIAudioEventAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset). |

### UIAudioEventAsset {#constructor-3}
> **UIAudioEventAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset). |

## Properties
### {{% prop-heading "audioEventMappings" %}}
> **[UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset) type.


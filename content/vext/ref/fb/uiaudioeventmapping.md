---
title: UIAudioEventMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[UIAudioEventMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "eventName" >}} | string |
| {{< prop "soundAsset" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIAudioEventMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIAudioEventMapping {#constructor-0}
> **UIAudioEventMapping**()

Creates a new [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) frostbite structure.

## Properties
### {{% prop-heading "eventName" %}}
> **string**

### {{% prop-heading "soundAsset" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

## Methods
### Clone
> **Clone**(): [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) type.


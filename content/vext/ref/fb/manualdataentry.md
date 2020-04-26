---
title: ManualDataEntry
---


## Summary
### Constructors
| |
| ----------- |
| **[ManualDataEntry](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "textures" >}} | [TextureAsset](/vext/ref/fb/textureasset)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ManualDataEntry](/vext/ref/fb/manualdataentry) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ManualDataEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ManualDataEntry {#constructor-0}
> **ManualDataEntry**()

Creates a new [ManualDataEntry](/vext/ref/fb/manualdataentry) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "language" %}}
> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "textures" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)**[]

## Methods
### Clone
> **Clone**(): [ManualDataEntry](/vext/ref/fb/manualdataentry)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ManualDataEntry](/vext/ref/fb/manualdataentry)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ManualDataEntry](/vext/ref/fb/manualdataentry) type.


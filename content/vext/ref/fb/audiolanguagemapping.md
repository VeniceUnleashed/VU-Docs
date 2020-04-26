---
title: AudioLanguageMapping
---


## Summary
### Constructors
| |
| ----------- |
| **[AudioLanguageMapping](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "target" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioLanguageMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioLanguageMapping {#constructor-0}
> **AudioLanguageMapping**()

Creates a new [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) frostbite structure.

## Properties
### {{% prop-heading "source" %}}
> **[AudioLanguage](/vext/ref/fb/audiolanguage)** | **nil**

### {{% prop-heading "target" %}}
> **[AudioLanguage](/vext/ref/fb/audiolanguage)** | **nil**

## Methods
### Clone
> **Clone**(): [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping) type.


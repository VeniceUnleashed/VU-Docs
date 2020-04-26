---
title: CompressorSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CompressorSettings](#constructor-0)**() |
| **[CompressorSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CompressorSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ratio" >}} | float |
| {{< prop "threshold" >}} | float |
| {{< prop "attack" >}} | float |
| {{< prop "release" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CompressorSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CompressorSettings {#constructor-0}
> **CompressorSettings**()

Creates a new [CompressorSettings](/vext/ref/fb/compressorsettings) frostbite instance.

### CompressorSettings {#constructor-1}
> **CompressorSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CompressorSettings](/vext/ref/fb/compressorsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CompressorSettings {#constructor-2}
> **CompressorSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompressorSettings](/vext/ref/fb/compressorsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CompressorSettings](/vext/ref/fb/compressorsettings). |

## Properties
### {{% prop-heading "ratio" %}}
> **float**

### {{% prop-heading "threshold" %}}
> **float**

### {{% prop-heading "attack" %}}
> **float**

### {{% prop-heading "release" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CompressorSettings](/vext/ref/fb/compressorsettings) type.


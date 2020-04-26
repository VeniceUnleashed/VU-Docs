---
title: AudioLanguageSetting
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AudioLanguageSetting](#constructor-0)**() |
| **[AudioLanguageSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AudioLanguageSetting](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "nameHash" >}} | int |
| {{< prop "displayName" >}} | string |
| {{< prop "mappings" >}} | [AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)[] |
| {{< prop "isDefault" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioLanguageSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioLanguageSetting {#constructor-0}
> **AudioLanguageSetting**()

Creates a new [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting) frostbite instance.

### AudioLanguageSetting {#constructor-1}
> **AudioLanguageSetting**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AudioLanguageSetting {#constructor-2}
> **AudioLanguageSetting**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "nameHash" %}}
> **int**

### {{% prop-heading "displayName" %}}
> **string**

### {{% prop-heading "mappings" %}}
> **[AudioLanguageMapping](/vext/ref/fb/audiolanguagemapping)**[]

### {{% prop-heading "isDefault" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting) type.


---
title: SoundSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[SoundSettings](#constructor-0)**() |
| **[SoundSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[SoundSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "voEnglish" >}} | string |
| {{< prop "audioSystemUri" >}} | string |
| {{< prop "voCommon" >}} | string |
| {{< prop "voItalian" >}} | string |
| {{< prop "voSpanish" >}} | string |
| {{< prop "voFrench" >}} | string |
| {{< prop "voGerman" >}} | string |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundSettings {#constructor-0}
> **SoundSettings**()

Creates a new [SoundSettings](/vext/ref/fb/soundsettings) frostbite instance.

### SoundSettings {#constructor-1}
> **SoundSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundSettings](/vext/ref/fb/soundsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundSettings {#constructor-2}
> **SoundSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [SoundSettings](/vext/ref/fb/soundsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [SoundSettings](/vext/ref/fb/soundsettings). |

### SoundSettings {#constructor-3}
> **SoundSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundSettings](/vext/ref/fb/soundsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundSettings](/vext/ref/fb/soundsettings). |

## Properties
### {{% prop-heading "voEnglish" %}}
> **string**

### {{% prop-heading "audioSystemUri" %}}
> **string**

### {{% prop-heading "voCommon" %}}
> **string**

### {{% prop-heading "voItalian" %}}
> **string**

### {{% prop-heading "voSpanish" %}}
> **string**

### {{% prop-heading "voFrench" %}}
> **string**

### {{% prop-heading "voGerman" %}}
> **string**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundSettings](/vext/ref/fb/soundsettings) type.


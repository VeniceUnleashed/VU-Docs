---
title: UISettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[UISettings](#constructor-0)**() |
| **[UISettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UISettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[UISettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "system" >}} | [UISystemType](/vext/ref/fb/uisystemtype) |
| {{< prop "bundles" >}} | [UIBundlesAsset](/vext/ref/fb/uibundlesasset) \| nil |
| {{< prop "profileOptions" >}} | [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset) \| nil |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "dataCop" >}} | [DataCopSettings](/vext/ref/fb/datacopsettings) |
| {{< prop "oneBundlePerGraph" >}} | bool |
| {{< prop "drawEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UISettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UISettings {#constructor-0}
> **UISettings**()

Creates a new [UISettings](/vext/ref/fb/uisettings) frostbite instance.

### UISettings {#constructor-1}
> **UISettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UISettings](/vext/ref/fb/uisettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UISettings {#constructor-2}
> **UISettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [UISettings](/vext/ref/fb/uisettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [UISettings](/vext/ref/fb/uisettings). |

### UISettings {#constructor-3}
> **UISettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISettings](/vext/ref/fb/uisettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UISettings](/vext/ref/fb/uisettings). |

## Properties
### {{% prop-heading "system" %}}
> **[UISystemType](/vext/ref/fb/uisystemtype)**

### {{% prop-heading "bundles" %}}
> **[UIBundlesAsset](/vext/ref/fb/uibundlesasset)** | **nil**

### {{% prop-heading "profileOptions" %}}
> **[ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset)** | **nil**

### {{% prop-heading "language" %}}
> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "dataCop" %}}
> **[DataCopSettings](/vext/ref/fb/datacopsettings)**

### {{% prop-heading "oneBundlePerGraph" %}}
> **bool**

### {{% prop-heading "drawEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UISettings](/vext/ref/fb/uisettings) type.


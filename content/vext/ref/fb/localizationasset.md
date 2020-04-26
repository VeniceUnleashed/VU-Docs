---
title: LocalizationAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[LocalizationAsset](#constructor-0)**() |
| **[LocalizationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LocalizationAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[LocalizationAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "localizedTexts" >}} | [UITextDatabase](/vext/ref/fb/uitextdatabase)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LocalizationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LocalizationAsset {#constructor-0}
> **LocalizationAsset**()

Creates a new [LocalizationAsset](/vext/ref/fb/localizationasset) frostbite instance.

### LocalizationAsset {#constructor-1}
> **LocalizationAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LocalizationAsset](/vext/ref/fb/localizationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LocalizationAsset {#constructor-2}
> **LocalizationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [LocalizationAsset](/vext/ref/fb/localizationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [LocalizationAsset](/vext/ref/fb/localizationasset). |

### LocalizationAsset {#constructor-3}
> **LocalizationAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalizationAsset](/vext/ref/fb/localizationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LocalizationAsset](/vext/ref/fb/localizationasset). |

## Properties
### {{% prop-heading "localizedTexts" %}}
> **[UITextDatabase](/vext/ref/fb/uitextdatabase)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LocalizationAsset](/vext/ref/fb/localizationasset) type.


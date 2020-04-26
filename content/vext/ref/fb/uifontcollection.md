---
title: UIFontCollection
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[UIFontCollection](#constructor-0)**() |
| **[UIFontCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIFontCollection](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIFontCollection](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [LanguageFormat](/vext/ref/fb/languageformat) |
| {{< prop "textDatabase" >}} | [UITextDatabase](/vext/ref/fb/uitextdatabase) \| nil |
| {{< prop "fonts" >}} | [UIFontAsset](/vext/ref/fb/uifontasset)[] |
| {{< prop "bundleKind" >}} | [ResourceBundleKind](/vext/ref/fb/resourcebundlekind) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIFontCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIFontCollection {#constructor-0}
> **UIFontCollection**()

Creates a new [UIFontCollection](/vext/ref/fb/uifontcollection) frostbite instance.

### UIFontCollection {#constructor-1}
> **UIFontCollection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIFontCollection](/vext/ref/fb/uifontcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIFontCollection {#constructor-2}
> **UIFontCollection**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIFontCollection](/vext/ref/fb/uifontcollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIFontCollection](/vext/ref/fb/uifontcollection). |

### UIFontCollection {#constructor-3}
> **UIFontCollection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFontCollection](/vext/ref/fb/uifontcollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIFontCollection](/vext/ref/fb/uifontcollection). |

## Properties
### {{% prop-heading "language" %}}
> **[LanguageFormat](/vext/ref/fb/languageformat)**

### {{% prop-heading "textDatabase" %}}
> **[UITextDatabase](/vext/ref/fb/uitextdatabase)** | **nil**

### {{% prop-heading "fonts" %}}
> **[UIFontAsset](/vext/ref/fb/uifontasset)**[]

### {{% prop-heading "bundleKind" %}}
> **[ResourceBundleKind](/vext/ref/fb/resourcebundlekind)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIFontCollection](/vext/ref/fb/uifontcollection) type.


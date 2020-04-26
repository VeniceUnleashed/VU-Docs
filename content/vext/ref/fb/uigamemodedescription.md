---
title: UIGameModeDescription
---

Inherits from [UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary

### Constructors

|  |
| --- |
| **[UIGameModeDescription](#constructor-0)**() |
| **[UIGameModeDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIGameModeDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIGameModeDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "name" >}} | string |
| {{< prop "abbreviation" >}} | string |
| {{< prop "desc" >}} | string |
| {{< prop "battlelogId" >}} | int |
| {{< prop "texturePath" >}} | string |
| {{< prop "variations" >}} | [GameModeVariation](/vext/ref/fb/gamemodevariation)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIGameModeDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIGameModeDescription {#constructor-0}

> **UIGameModeDescription**()

Creates a new [UIGameModeDescription](/vext/ref/fb/uigamemodedescription) frostbite instance.

### UIGameModeDescription {#constructor-1}

> **UIGameModeDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIGameModeDescription](/vext/ref/fb/uigamemodedescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIGameModeDescription {#constructor-2}

> **UIGameModeDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription). |

### UIGameModeDescription {#constructor-3}

> **UIGameModeDescription**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIGameModeDescription](/vext/ref/fb/uigamemodedescription). |

## Properties

### {{% prop-heading "identifier" %}}

> **string**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "abbreviation" %}}

> **string**

### {{% prop-heading "desc" %}}

> **string**

### {{% prop-heading "battlelogId" %}}

> **int**

### {{% prop-heading "texturePath" %}}

> **string**

### {{% prop-heading "variations" %}}

> **[GameModeVariation](/vext/ref/fb/gamemodevariation)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIGameModeDescription](/vext/ref/fb/uigamemodedescription) type.


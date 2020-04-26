---
title: CustomizationUnlockParts
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CustomizationUnlockParts](#constructor-0)**() |
| **[CustomizationUnlockParts](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CustomizationUnlockParts](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "uiCategorySid" >}} | string |
| {{< prop "selectableUnlocks" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomizationUnlockParts" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomizationUnlockParts {#constructor-0}

> **CustomizationUnlockParts**()

Creates a new [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts) frostbite instance.

### CustomizationUnlockParts {#constructor-1}

> **CustomizationUnlockParts**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CustomizationUnlockParts {#constructor-2}

> **CustomizationUnlockParts**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts). |

## Properties

### {{% prop-heading "uiCategorySid" %}}

> **string**

### {{% prop-heading "selectableUnlocks" %}}

> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts) type.


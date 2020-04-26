---
title: UINametagCompData
---

Inherits from [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata)

## Summary

### Constructors

|  |
| --- |
| **[UINametagCompData](#constructor-0)**() |
| **[UINametagCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UINametagCompData](#constructor-2)**(other: [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata)) |
| **[UINametagCompData](#constructor-3)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UINametagCompData](#constructor-4)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UINametagCompData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "squadTint" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "enemyTint" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "friendlyTint" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "orderCooldown" >}} | int |
| {{< prop "tooltipCooldown" >}} | int |
| {{< prop "healthBarSize" >}} | float |
| {{< prop "nameFontSize" >}} | float |
| {{< prop "nameGlowSize" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UINametagCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UINametagCompData {#constructor-0}

> **UINametagCompData**()

Creates a new [UINametagCompData](/vext/ref/fb/uinametagcompdata) frostbite instance.

### UINametagCompData {#constructor-1}

> **UINametagCompData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UINametagCompData](/vext/ref/fb/uinametagcompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UINametagCompData {#constructor-2}

> **UINametagCompData**(other: [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata))

Casts an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata) to [UINametagCompData](/vext/ref/fb/uinametagcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata) | The instance to cast to [UINametagCompData](/vext/ref/fb/uinametagcompdata). |

### UINametagCompData {#constructor-3}

> **UINametagCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UINametagCompData](/vext/ref/fb/uinametagcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UINametagCompData](/vext/ref/fb/uinametagcompdata). |

### UINametagCompData {#constructor-4}

> **UINametagCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UINametagCompData](/vext/ref/fb/uinametagcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UINametagCompData](/vext/ref/fb/uinametagcompdata). |

### UINametagCompData {#constructor-5}

> **UINametagCompData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UINametagCompData](/vext/ref/fb/uinametagcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UINametagCompData](/vext/ref/fb/uinametagcompdata). |

## Properties

### {{% prop-heading "squadTint" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "enemyTint" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "friendlyTint" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "orderCooldown" %}}

> **int**

### {{% prop-heading "tooltipCooldown" %}}

> **int**

### {{% prop-heading "healthBarSize" %}}

> **float**

### {{% prop-heading "nameFontSize" %}}

> **float**

### {{% prop-heading "nameGlowSize" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UINametagCompData](/vext/ref/fb/uinametagcompdata) type.


---
title: WeaponSuppressionData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[WeaponSuppressionData](#constructor-0)**() |
| **[WeaponSuppressionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponSuppressionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxMultiplier" >}} | float |
| {{< prop "minMultiplier" >}} | float |
| {{< prop "minDistance" >}} | float |
| {{< prop "maxDistance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponSuppressionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponSuppressionData {#constructor-0}

> **WeaponSuppressionData**()

Creates a new [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata) frostbite instance.

### WeaponSuppressionData {#constructor-1}

> **WeaponSuppressionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponSuppressionData {#constructor-2}

> **WeaponSuppressionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata). |

## Properties

### {{% prop-heading "maxMultiplier" %}}

> **float**

### {{% prop-heading "minMultiplier" %}}

> **float**

### {{% prop-heading "minDistance" %}}

> **float**

### {{% prop-heading "maxDistance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponSuppressionData](/vext/ref/fb/weaponsuppressiondata) type.


---
title: GearBagSpec
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[GearBagSpec](#constructor-0)**() |
| **[GearBagSpec](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GearBagSpec](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GearBagSpec](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxPrimaryWeapons" >}} | int |
| {{< prop "maxSecondaryWeapons" >}} | int |
| {{< prop "maxSidearms" >}} | int |
| {{< prop "maxGadgetsPerSlot" >}} | int |
| {{< prop "gadgetSlots" >}} | int |
| {{< prop "childSpecs" >}} | [GearBagSpec](/vext/ref/fb/gearbagspec)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GearBagSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GearBagSpec {#constructor-0}

> **GearBagSpec**()

Creates a new [GearBagSpec](/vext/ref/fb/gearbagspec) frostbite instance.

### GearBagSpec {#constructor-1}

> **GearBagSpec**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GearBagSpec](/vext/ref/fb/gearbagspec) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GearBagSpec {#constructor-2}

> **GearBagSpec**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GearBagSpec](/vext/ref/fb/gearbagspec). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GearBagSpec](/vext/ref/fb/gearbagspec). |

### GearBagSpec {#constructor-3}

> **GearBagSpec**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GearBagSpec](/vext/ref/fb/gearbagspec). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GearBagSpec](/vext/ref/fb/gearbagspec). |

## Properties

### {{% prop-heading "maxPrimaryWeapons" %}}

> **int**

### {{% prop-heading "maxSecondaryWeapons" %}}

> **int**

### {{% prop-heading "maxSidearms" %}}

> **int**

### {{% prop-heading "maxGadgetsPerSlot" %}}

> **int**

### {{% prop-heading "gadgetSlots" %}}

> **int**

### {{% prop-heading "childSpecs" %}}

> **[GearBagSpec](/vext/ref/fb/gearbagspec)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GearBagSpec](/vext/ref/fb/gearbagspec) type.


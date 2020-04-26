---
title: TeamData
---

Inherits from [TeamAsset](/vext/ref/fb/teamasset)

## Summary

### Constructors

|  |
| --- |
| **[TeamData](#constructor-0)**() |
| **[TeamData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TeamData](#constructor-2)**(other: [TeamAsset](/vext/ref/fb/teamasset)) |
| **[TeamData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[TeamData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "soldier" >}} | [SoldierBlueprint](/vext/ref/fb/soldierblueprint) \| nil |
| {{< prop "faction" >}} | [FactionId](/vext/ref/fb/factionid) |
| {{< prop "soldierCustomization" >}} | [SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset)[] |
| {{< prop "vehicleCustomization" >}} | [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TeamData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TeamData {#constructor-0}

> **TeamData**()

Creates a new [TeamData](/vext/ref/fb/teamdata) frostbite instance.

### TeamData {#constructor-1}

> **TeamData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TeamData](/vext/ref/fb/teamdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TeamData {#constructor-2}

> **TeamData**(other: [TeamAsset](/vext/ref/fb/teamasset))

Casts an instance of type [TeamAsset](/vext/ref/fb/teamasset) to [TeamData](/vext/ref/fb/teamdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TeamAsset](/vext/ref/fb/teamasset) | The instance to cast to [TeamData](/vext/ref/fb/teamdata). |

### TeamData {#constructor-3}

> **TeamData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [TeamData](/vext/ref/fb/teamdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [TeamData](/vext/ref/fb/teamdata). |

### TeamData {#constructor-4}

> **TeamData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TeamData](/vext/ref/fb/teamdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TeamData](/vext/ref/fb/teamdata). |

## Properties

### {{% prop-heading "soldier" %}}

> **[SoldierBlueprint](/vext/ref/fb/soldierblueprint)** \| **nil**

### {{% prop-heading "faction" %}}

> **[FactionId](/vext/ref/fb/factionid)**

### {{% prop-heading "soldierCustomization" %}}

> **[SoldierCustomizationAsset](/vext/ref/fb/soldiercustomizationasset)**[]

### {{% prop-heading "vehicleCustomization" %}}

> **[VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TeamData](/vext/ref/fb/teamdata) type.


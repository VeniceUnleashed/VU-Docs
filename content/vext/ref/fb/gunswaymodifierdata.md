---
title: GunSwayModifierData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[GunSwayModifierData](#constructor-0)**() |
| **[GunSwayModifierData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GunSwayModifierData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GunSwayModifierData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "standZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "standNoZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "crouchZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "crouchNoZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "proneZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "proneNoZoomModifier" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "onlyInSupportedShooting" >}} | bool |
| {{< prop "onlyOnWeaponLightEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayModifierData {#constructor-0}

> **GunSwayModifierData**()

Creates a new [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata) frostbite instance.

### GunSwayModifierData {#constructor-1}

> **GunSwayModifierData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GunSwayModifierData {#constructor-2}

> **GunSwayModifierData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata). |

### GunSwayModifierData {#constructor-3}

> **GunSwayModifierData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata). |

## Properties

### {{% prop-heading "unlockAsset" %}}

> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** \| **nil**

### {{% prop-heading "standZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "standNoZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "crouchZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "crouchNoZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "proneZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "proneNoZoomModifier" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "onlyInSupportedShooting" %}}

> **bool**

### {{% prop-heading "onlyOnWeaponLightEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata) type.


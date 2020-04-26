---
title: GunSwayData
---

Inherits from [WeaponSwayData](/vext/ref/fb/weaponswaydata)

## Summary

### Constructors

|  |
| --- |
| **[GunSwayData](#constructor-0)**() |
| **[GunSwayData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GunSwayData](#constructor-2)**(other: [WeaponSwayData](/vext/ref/fb/weaponswaydata)) |
| **[GunSwayData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "stand" >}} | [GunSwayStandData](/vext/ref/fb/gunswaystanddata) |
| {{< prop "crouch" >}} | [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) |
| {{< prop "prone" >}} | [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) |
| {{< prop "proneToCrouch" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "proneToStand" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "crouchToProne" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "crouchToStand" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "standToProne" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "standToCrouch" >}} | [GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition) |
| {{< prop "suppressionModifierUnzoomed" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "suppressionModifierZoomed" >}} | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |
| {{< prop "modifiers" >}} | [GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata)[] |
| {{< prop "deviationScaleFactorZoom" >}} | float |
| {{< prop "gameplayDeviationScaleFactorZoom" >}} | float |
| {{< prop "deviationScaleFactorNoZoom" >}} | float |
| {{< prop "gameplayDeviationScaleFactorNoZoom" >}} | float |
| {{< prop "shootingRecoilDecreaseScale" >}} | float |
| {{< prop "firstShotRecoilMultiplier" >}} | float |
| {{< prop "cameraRecoil" >}} | [CameraRecoilData](/vext/ref/fb/camerarecoildata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayData {#constructor-0}

> **GunSwayData**()

Creates a new [GunSwayData](/vext/ref/fb/gunswaydata) frostbite instance.

### GunSwayData {#constructor-1}

> **GunSwayData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayData](/vext/ref/fb/gunswaydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GunSwayData {#constructor-2}

> **GunSwayData**(other: [WeaponSwayData](/vext/ref/fb/weaponswaydata))

Casts an instance of type [WeaponSwayData](/vext/ref/fb/weaponswaydata) to [GunSwayData](/vext/ref/fb/gunswaydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponSwayData](/vext/ref/fb/weaponswaydata) | The instance to cast to [GunSwayData](/vext/ref/fb/gunswaydata). |

### GunSwayData {#constructor-3}

> **GunSwayData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GunSwayData](/vext/ref/fb/gunswaydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GunSwayData](/vext/ref/fb/gunswaydata). |

## Properties

### {{% prop-heading "stand" %}}

> **[GunSwayStandData](/vext/ref/fb/gunswaystanddata)**

### {{% prop-heading "crouch" %}}

> **[GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata)**

### {{% prop-heading "prone" %}}

> **[GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata)**

### {{% prop-heading "proneToCrouch" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "proneToStand" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "crouchToProne" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "crouchToStand" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "standToProne" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "standToCrouch" %}}

> **[GunSwayStanceTransition](/vext/ref/fb/gunswaystancetransition)**

### {{% prop-heading "suppressionModifierUnzoomed" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "suppressionModifierZoomed" %}}

> **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)**

### {{% prop-heading "modifiers" %}}

> **[GunSwayModifierData](/vext/ref/fb/gunswaymodifierdata)**[]

### {{% prop-heading "deviationScaleFactorZoom" %}}

> **float**

### {{% prop-heading "gameplayDeviationScaleFactorZoom" %}}

> **float**

### {{% prop-heading "deviationScaleFactorNoZoom" %}}

> **float**

### {{% prop-heading "gameplayDeviationScaleFactorNoZoom" %}}

> **float**

### {{% prop-heading "shootingRecoilDecreaseScale" %}}

> **float**

### {{% prop-heading "firstShotRecoilMultiplier" %}}

> **float**

### {{% prop-heading "cameraRecoil" %}}

> **[CameraRecoilData](/vext/ref/fb/camerarecoildata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayData](/vext/ref/fb/gunswaydata) type.


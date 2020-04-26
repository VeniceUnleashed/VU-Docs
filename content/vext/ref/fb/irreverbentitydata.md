---
title: IrReverbEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[IrReverbEntityData](#constructor-0)**() |
| **[IrReverbEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[IrReverbEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[IrReverbEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[IrReverbEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[IrReverbEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "impulseResponse" >}} | [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset) \| nil |
| {{< prop "gain" >}} | float |
| {{< prop "volume" >}} | float |
| {{< prop "fadeCurve" >}} | [FadeCurveType](/vext/ref/fb/fadecurvetype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IrReverbEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IrReverbEntityData {#constructor-0}
> **IrReverbEntityData**()

Creates a new [IrReverbEntityData](/vext/ref/fb/irreverbentitydata) frostbite instance.

### IrReverbEntityData {#constructor-1}
> **IrReverbEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [IrReverbEntityData](/vext/ref/fb/irreverbentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### IrReverbEntityData {#constructor-2}
> **IrReverbEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). |

### IrReverbEntityData {#constructor-3}
> **IrReverbEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). |

### IrReverbEntityData {#constructor-4}
> **IrReverbEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). |

### IrReverbEntityData {#constructor-5}
> **IrReverbEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata). |

## Properties
### {{% prop-heading "impulseResponse" %}}
> **[ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset)** | **nil**

### {{% prop-heading "gain" %}}
> **float**

### {{% prop-heading "volume" %}}
> **float**

### {{% prop-heading "fadeCurve" %}}
> **[FadeCurveType](/vext/ref/fb/fadecurvetype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IrReverbEntityData](/vext/ref/fb/irreverbentitydata) type.


---
title: FadeEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[FadeEntityData](#constructor-0)**() |
| **[FadeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FadeEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[FadeEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FadeEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FadeEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fadeTime" >}} | float |
| {{< prop "maxWaitFadedWhileStreamingTime" >}} | float |
| {{< prop "fadeScreen" >}} | bool |
| {{< prop "fadeUI" >}} | bool |
| {{< prop "fadeRumble" >}} | bool |
| {{< prop "fadeAudio" >}} | bool |
| {{< prop "fadeMovie" >}} | bool |
| {{< prop "startFaded" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FadeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FadeEntityData {#constructor-0}
> **FadeEntityData**()

Creates a new [FadeEntityData](/vext/ref/fb/fadeentitydata) frostbite instance.

### FadeEntityData {#constructor-1}
> **FadeEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FadeEntityData](/vext/ref/fb/fadeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FadeEntityData {#constructor-2}
> **FadeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [FadeEntityData](/vext/ref/fb/fadeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [FadeEntityData](/vext/ref/fb/fadeentitydata). |

### FadeEntityData {#constructor-3}
> **FadeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FadeEntityData](/vext/ref/fb/fadeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FadeEntityData](/vext/ref/fb/fadeentitydata). |

### FadeEntityData {#constructor-4}
> **FadeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FadeEntityData](/vext/ref/fb/fadeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FadeEntityData](/vext/ref/fb/fadeentitydata). |

### FadeEntityData {#constructor-5}
> **FadeEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FadeEntityData](/vext/ref/fb/fadeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FadeEntityData](/vext/ref/fb/fadeentitydata). |

## Properties
### {{% prop-heading "fadeTime" %}}
> **float**

### {{% prop-heading "maxWaitFadedWhileStreamingTime" %}}
> **float**

### {{% prop-heading "fadeScreen" %}}
> **bool**

### {{% prop-heading "fadeUI" %}}
> **bool**

### {{% prop-heading "fadeRumble" %}}
> **bool**

### {{% prop-heading "fadeAudio" %}}
> **bool**

### {{% prop-heading "fadeMovie" %}}
> **bool**

### {{% prop-heading "startFaded" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FadeEntityData](/vext/ref/fb/fadeentitydata) type.


export interface ActivityData {
  resource_state: number;
  athlete: { id: number; resource_state: number };
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  workout_type: string | null;
  id: number;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  location_city: string | null;
  location_state: string | null;
  location_country: string | null;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: {
    id: string;
    summary_polyline: string;
    resource_state: number;
  };
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id: number | null;
  start_latlng: number[];
  end_latlng: number[];
  average_speed: number;
  max_speed: number;
  average_heartrate: number;
  average_cadence: number;
  has_heartrate: boolean;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high: number;
  elev_low: number;
  upload_id: number;
  upload_id_str: string;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
}

export interface AthleteData {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  bio: null;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend: null;
  follower: null;
  blocked: boolean;
  can_follow: boolean;
  follower_count: number;
  friend_count: number;
  mutual_friend_count: number;
  athlete_type: number;
  date_preference: string;
  measurement_preference: string;
  clubs: {
    id: number;
    resource_state: number;
    name: string;
    profile_medium: string;
    profile: string;
    cover_photo: string;
    cover_photo_small: string;
    activity_types: string[];
    activity_types_icon: string;
    dimensions: string[];
    sport_type: string;
    city: string;
    state: string;
    country: string;
    private: boolean;
    member_count: number;
    featured: boolean;
    verified: boolean;
    url: string;
    membership: string;
    admin: boolean;
    owner: boolean;
  }[];
  bikes: {
    id: string;
    primary: boolean;
    name: string;
    nickname: string;
    resource_state: number;
    retired: boolean;
    distance: number;
    converted_distance: number;
  }[];
  shoes: {
    id: string;
    primary: boolean;
    name: string;
    nickname: string;
    resource_state: number;
    retired: boolean;
    distance: number;
    converted_distance: number;
  }[];
  ftp: null;
  is_winback_via_upload: boolean;
  is_winback_via_view: boolean;
}

export interface StatsData {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
  all_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  recent_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
  all_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  recent_swim_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
  all_swim_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  ytd_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  ytd_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  ytd_swim_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
}
